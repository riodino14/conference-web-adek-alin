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
        "",
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
          Rio&apos;s Conference Day
          <br />
          <span>with Alin</span>
        </h1>
        <div className="title-divider" aria-hidden="true">
          <b>♡</b>
        </div>
        <p className="intro">
          Thank You for Everything 💗
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
            <p>I am so proud of you, Alin · 2026</p>
          </div>
          <span className="heart-doodle" aria-hidden="true">
            ♡
          </span>
        </div>

        <article className="message-card">
          <p className="card-label">a little note for you</p>
          <h2>Dear Adek, Lintang Dwi Lestari Putri,</h2>
          <p>
            Mas ingin mengucapkan, terima kasih banyak atas segala kebaikan-kebaikan yang sudah adek berikan kepada mas dari SMA hingga Mas Alhamdulillah sudah sidang kuliah saat ini. Kehadiran Adek yang senantiasa mendukung Mas merupakan salah satu anugrah berharga bagi Mas. Dukungan-dukungan tersebut, senantiasa membantu Mas hingga bisa menggapai di titik ini. Terlebih dari itu, Mas ingin berterima kasih juga karena di hari yang spesial ini, Adek sempat menghadirkan diri terlepas Mas pun sangat amat mewajarkan jika Adek belum bisa datang. Namun, Adek dengan tekad baik Adek memaksakan diri untuk hadir salah satunya untuk membuat Mas tidak perlu merasa sedih atau kesepian sebab beberapa teman mas banyak yang tidak bisa hadir. Kehadiran Adek yang tiba tiba hadir di lantai 1 TULT, membuat Mas merasa menjadi sosok yang paling senang juga di dunia ini melihat orang yang Mas sayang tiba tiba hadir begitu saja mendukung Mas. Moment tersebut terukir manis di ingatan Mas. Terima kasih ya Adek, senyuman manis dan suara kehadiran Adeek di lantai 1 TULT membuat hari Mas semakin manis, bahagia, dan berwarna.
          </p>
          <p>
            Adek hadir dengan buah tangan yang Adek persiapkan begitu membuat Mas merasa terharu dan sedih mengapa Adek repot-repot demikian untuk membawa banyak buah tangan tersebut huhu. Mulai dari minuman favorit Mas, hingga dungkin donut dan dimsum yang merupakan makanan-makanan favorit Mas dan Mamah jugaa. Tak lupa juga dengan bunga alam yang sangat indah dan wangi membuat hati mas berbunga-bunga dan mas merasa dukungan Adek semakin hangat dan dekat.
            Terima kasih banyak ya Adek sudah hadir juga di kehidupan Mas Rio. 
          </p>
          <p>
            Adek sendiri pun tadi sudah sangat bagus dan mas kagum Adek bisa dengan baik menghandle situasi-situasi tadi termasuk dengan Mamah hihi. Tadi Mamah juga bilang harusnya Adek ikut makan tadi sama kita cuma tadi agendanya benar benar mendadak huhu maaf yaah. 
            Mas minta maaf jika selama kita bertemu di hari tadi, mas masi ada kekurangan atau kesalahan dalam bertindak. Mas minta maaf sebesar-besarnya tadi sempat menjatuhkan makanan-makanannya huhu mas tidak bermaksud untuk tidak mendengarkan bantuan Adek, Mas murni hanya ingin membawa barang-barang Adek agar Adek tidak perlu cape membawa semua barangnya. Mas minta maaf ya Adek, padahal di dalamnya ternyata ada pesan yang sangat lucu namun hangat dari Adek huhuhu 🥹 Mas sangat terharu dan cukup surprised juga dengan kata katanya melalui gambar yang Adek kirim huhu. Makasi ya Adek 🥺 
          </p>
          <p>
            Mas akan lebih senantiasa membantu Adek juga untuk menghadapi berbagai situasi yah. Namun, satu hal yang terpenting bahwa Mas sangat sayang dengan Adek. Mas juga mohon doanya yah agar Mas bisa juga ni datang ke tiap acara Adek dengan versi Mas yang teruss makin baik dan sukses hehe. Salam juga untuk keluarga yahh makasi udah lahirin sosok wanita hebat dan penyayang bernama Lintang Dwi Lestari Putri 💗

          </p>
          <p> 
            Makasi Adek, Mas sayanggg banget sama Adek 🫶 
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
