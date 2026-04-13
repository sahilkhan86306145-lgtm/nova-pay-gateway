"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg,#020617,#000)",
      color: "white",
      padding: "20px"
    }}>

      {/* LOGO */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Image src="/logo.png" alt="logo" width={70} height={70} />
        <h2 style={{ color: "#22c55e", marginTop: "10px" }}>
          Nova Pay
        </h2>
      </div>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        marginTop: "40px"
      }}>
        <h1 style={{
          fontSize: "34px",
          fontWeight: "800"
        }}>
          Next-Gen <br />
          <span style={{ color: "#22c55e" }}>Payment Gateway</span>
        </h1>

        <p style={{
          marginTop: "10px",
          color: "#9ca3af"
        }}>
          Fast, secure & trusted digital payments platform
        </p>

        <button
          onClick={() => router.push("/login")}
          style={{
            marginTop: "25px",
            padding: "14px 30px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(90deg,#22c55e,#16a34a)",
            boxShadow: "0 10px 30px rgba(34,197,94,0.5)",
            fontWeight: "600"
          }}
        >
          Start Earning →
        </button>
      </div>

      {/* FEATURES */}
      <div style={{ marginTop: "50px" }}>

        <div style={{
          background: "#0f172a",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px"
        }}>
          ⚡ Lightning Fast Transactions
        </div>

        <div style={{
          background: "#0f172a",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px"
        }}>
          🔒 Military Grade Security
        </div>

        <div style={{
          background: "#0f172a",
          padding: "15px",
          borderRadius: "12px"
        }}>
          💰 Instant Withdraw & Deposit
        </div>

      </div>

    </div>
  );
            }
