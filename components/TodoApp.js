"use client";

import { useEffect, useState } from "react";
import TaskModal from "./TaskModal";

const STORAGE_KEY = "to-do-next-tasks";

export default function TodoApp() {
  // CUSTOM CRUD: state React menyimpan daftar tugas yang sedang ditampilkan.
  const [tasks, setTasks] = useState([]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: "create",
    task: null,
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // CREATE dan UPDATE: mode edit mengubah tugas lama; mode create menambah tugas baru.
  function saveTask(values) {
    if (modalState.mode === "edit") {
      const updatedTasks = tasks.map((task) =>
        task.id === modalState.task.id ? { ...task, ...values } : task
      );
      setTasks(updatedTasks);
    } else {
      const newTask = {
        id: Date.now(),
        ...values,
        createdAt: new Date().toISOString(),
        done: false,
      };
      setTasks([newTask, ...tasks]);
    }

    closeModal();
  }

  // DELETE: buat daftar baru tanpa tugas yang dipilih.
  function deleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
    closeModal();
  }

  // CUSTOM CRUD: checkbox memperbarui status selesai tugas.
  function toggleTask(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  }

  // Buka modal dengan kostum create, detail, atau edit.
  function openCreateModal() {
    setModalState({ isOpen: true, mode: "create", task: null });
  }

  function openDetailModal(task) {
    setModalState({ isOpen: true, mode: "detail", task });
  }

  function openEditModal(task) {
    setModalState({ isOpen: true, mode: "edit", task });
  }

  function closeModal() {
    setModalState({ isOpen: false, mode: "create", task: null });
  }

  // LOCAL STORAGE: baca data di browser setelah halaman pertama selesai dirender.
  useEffect(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    if (savedTasks) setTasks(JSON.parse(savedTasks));
    setIsLoaded(true);
  }, []);

  // LOCAL STORAGE: tulis daftar terbaru setiap kali daftar tugas berubah.
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  return (
    <main className="page-shell todo-page">
      <header className="todo-heading">
        <div>
          <h1>Daftar Tugas <span className="task-count">{tasks.length}</span></h1>
          <p className="page-description">Catat tugasmu dan tandai saat sudah selesai.</p>
        </div>
        <button className="button button-primary" type="button" onClick={openCreateModal}>
          <span className="button-plus" aria-hidden="true">+</span> Tambah Tugas Baru
        </button>
      </header>

      <section className="task-list" aria-label="Daftar tugas">
        {tasks.map((task) => (
          <article className={`task-card ${task.done ? "is-complete" : ""}`} key={task.id}>
            <input
              className="task-checkbox"
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              aria-label={`Tandai ${task.title} selesai`}
            />
            <button className="task-title-button" type="button" onClick={() => openDetailModal(task)}>
              <span className={task.done ? "task-title completed" : "task-title"}>{task.title}</span>
              <span className="task-description">{task.description || "Tidak ada deskripsi"}</span>
            </button>
            <div className="task-actions">
              <span className={`priority-pill ${task.priority === "Penting" ? "priority-high" : ""}`}>
                {task.priority}
              </span>
              <button className="button button-secondary task-edit" type="button" onClick={() => openEditModal(task)}>
                Edit
              </button>
            </div>
          </article>
        ))}

        {tasks.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">✓</span>
            <p className="empty-title">Belum ada tugas</p>
            <p>Tambahkan tugas pertamamu untuk mulai mengatur kegiatan.</p>
          </div>
        )}
      </section>

      <p className="storage-note">Tugas disimpan di browser ini.</p>

      {modalState.isOpen && (
        <TaskModal
          mode={modalState.mode}
          task={modalState.task}
          onClose={closeModal}
          onSave={saveTask}
          onDelete={deleteTask}
          onEdit={() => openEditModal(modalState.task)}
        />
      )}
    </main>
  );
}
