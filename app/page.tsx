"use client";

import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicMessage, setMusicMessage] = useState("");

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      setMusicMessage("");
    } catch {
      setMusicMessage(
        "Tambahkan file lagu.mp3 ke folder public, lalu tekan tombol ini lagi.",
      );
    }
  };

  return (
    <main className="memory-page">
      <div className="paper-grain" aria-hidden="true" />
      <div className="flower flower-one" aria-hidden="true">
        ✿
      </div>
      <div className="flower flower-two" aria-hidden="true">
        ✿
      </div>
      <div className="leaf-sprig leaf-sprig-left" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="leaf-sprig leaf-sprig-right" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>

      <audio
        ref={audioRef}
        src="/lagu.mp3"
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />

      <button
        className={`music-button ${isPlaying ? "is-playing" : ""}`}
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Jeda musik" : "Putar musik"}
        aria-pressed={isPlaying}
      >
        <span className="music-icon" aria-hidden="true">
          {isPlaying ? "Ⅱ" : "♪"}
        </span>
        <span>{isPlaying ? "Jeda musik" : "Putar musik"}</span>
      </button>

      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">A page full of memories</p>
        <h1 id="page-title">
          Our Little <span>Story</span>
        </h1>
        <div className="title-divider" aria-hidden="true">
          <b>♡</b>
        </div>
        <p className="intro">
          Beberapa momen terlalu indah untuk hanya disimpan di galeri.
        </p>
      </section>

      <section className="keepsake" aria-label="Foto dan pesan kenangan">
        <div className="photo-wrap">
          <span className="tape tape-left" aria-hidden="true" />
          <span className="tape tape-right" aria-hidden="true" />
          <div className="photo-frame">
            <img
              src="/kolase-kenangan.png"
              alt="Kolase foto kenangan Rio dan Alin di hari konferensi"
            />
            <p>Rio&apos;s Conference Day with Alin · 2026</p>
          </div>
          <span className="heart-doodle" aria-hidden="true">
            ♡
          </span>
        </div>

        <article className="message-card">
          <p className="card-label">a little note for you</p>
          <h2>Untuk Alin,</h2>
          <p>
            Di setiap langkah kecil, ada cerita yang membuat hari biasa terasa
            istimewa. Terima kasih sudah hadir, mendukung, dan menjadi rumah
            paling hangat di tengah ramainya dunia.
          </p>
          <p>
            Semoga halaman sederhana ini selalu mengingatkan kita pada senyum,
            perjuangan, dan semua hal baik yang pernah kita rayakan bersama.
          </p>
          <div className="signature">
            <span>With love,</span>
            <strong>Rio ♡</strong>
          </div>
        </article>
      </section>

      <footer>
        <span aria-hidden="true">✦</span>
        <p>Made to keep our favorite moments close.</p>
        <span aria-hidden="true">✦</span>
      </footer>

      {musicMessage && (
        <div className="music-toast" role="status">
          {musicMessage}
        </div>
      )}
    </main>
  );
}
