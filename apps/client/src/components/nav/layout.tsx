// apps/client/src/components/nav/Layout.tsx
import { Header } from "@/components/nav/Header"; 
import { Footer } from "@/components/layout/footer"; // Import Footer component

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main> {/* Content goes here */}
      <Footer /> {/* Footer will be at the bottom */}
    </div>
  );
}
