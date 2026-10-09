import { JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import FooterSection from "../components/Footer-section";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const JetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono", 

});

export const metadata = {
  title: "Sujit Portfolio",
  description: "sujit. portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={JetbrainsMono.variable}>
       <Header/>
       
       {children}
       <FooterSection/>
        </body>
    </html>
  );
}
