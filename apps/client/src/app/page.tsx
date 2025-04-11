// pages/index.tsx

import Layout from "../components/nav/layout"; // relative path to Layout.tsx


export default function Home() {
  return (
    <Layout> {/* Wrap content with Layout */}
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Welcome to Luminalogix</h1>
      </div>
    </Layout>
  );
}
