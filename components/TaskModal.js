"use client";

import { useState } from "react";

export default function TaskModal({ mode, task, onClose, onSave, onDelete, onEdit }) {
  // CREATE memakai form kosong. EDIT memakai data tugas yang sudah dipilih.
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || "Biasa");

  // Saat form dikirim, kirim nilainya ke TodoApp untuk disimpan.
  function handleSubmit(event) {
    event.preventDefault();
    onSave({
      title: title.trim(),
      description: description.trim(),
      priority,
    });
  }

  return (
    <div className="modal-backdrop" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="task-modal" role="dialog" aria-modal="true">
        <div className="modal-heading">
          <h2>
            {mode === "create" ? "Tambah Tugas" : mode === "edit" ? "Edit Tugas" : "Detail Tugas"}
          </h2>
          <button className="modal-close" type="button" onClick={onClose} aria-label="Tutup">
            ×
          </button>
        </div>

        {mode === "detail" ? (
          <div>
            <h3>{task.title}</h3>
            <p className="detail-description">{task.description || "Tidak ada deskripsi."}</p>
            <p className="detail-meta">Prioritas: {task.priority}</p>
            <p className="detail-meta">Dibuat: {new Date(task.createdAt).toLocaleDateString("id-ID")}</p>
            <div className="modal-actions modal-actions-split">
              <button className="button button-danger" type="button" onClick={() => onDelete(task)}>
                Hapus Tugas Ini
              </button>
              <div>
                <button className="button button-secondary" type="button" onClick={onClose}>Tutup</button>
                <button className="button button-primary" type="button" onClick={onEdit}>Edit Tugas</button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="form-field">
              Nama tugas
              <input
                autoFocus
                required
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Contoh: Belajar Next.js"
              />
            </label>
            <label className="form-field">
              Deskripsi
              <textarea
                rows={3}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Catatan singkat tentang tugas"
              />
            </label>
            <label className="form-field">
              Prioritas
              <select value={priority} onChange={(event) => setPriority(event.target.value)}>
                <option value="Penting">Penting</option>
                <option value="Biasa">Biasa</option>
              </select>
            </label>
            <div className="modal-actions">
              <button className="button button-secondary" type="button" onClick={onClose}>Batal</button>
              <button className="button button-primary" type="submit">
                {mode === "create" ? "Buat Tugas" : "Simpan Perubahan"}
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
