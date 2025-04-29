import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header"
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Lakshai - AI Career Coach",
  description: "Lakshai is your personalized AI career coach, guiding you to the right path with smart insights, tailored advice, and actionable goals. Whether you're a student, a job seeker, or planning a career switch, Lakshai helps you move forward with clarity and confidence.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>
    <html lang="en" suppressHydrationWarning>
    <head />
    <body className={`${inter.className}`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {/* header */}
        <Header/>
       <main className="min-h-screen pt-16 pb-16">{children}</main> 
        <Toaster richColors/>
        {/* footer */}
        <footer >
        {/* <div className="container mx-auto px-4 text-center text-gray-200">
          <p>Maid with 💗 Soumadeep</p>
        </div> */}
        <Footer/>
        

        </footer>
      </ThemeProvider>
    </body>
  </html>
  </ClerkProvider>
  );
}
