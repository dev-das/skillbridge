import { getHealth } from "@/lib/api";

export default async function Home() {
  const health = await getHealth();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">
        SkillBridge
      </h1>

      <p className="text-xl">
        Backend Status: <b>{health.status}</b>
      </p>

      <p>{health.service}</p>

      <p>Version: {health.version}</p>
    </main>
  );
}
