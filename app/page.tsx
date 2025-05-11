"use client"
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import {motion} from 'framer-motion'
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <motion.span   className={title()}>Gümüşhane&nbsp;</motion.span>
        <span className={title({ color: "violet" })}>Teknoloji&nbsp;</span>
        <br />
        <span className={title()}>
          Transfer Ofisi E-Bülteni
        </span>
        <div className={subtitle({ class: "mt-4" })}>
        Gümüşhane Teknoloji Transfer Ofisi’nin yenilikçi gelişmelerini ve güncel haberlerini takip edebileceğiniz aylık e-bülten.
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <Input label="Email" type="email"/>
        <Button color="primary" >
          Abone Ol
        </Button>
        
      </div>

      <div className="mt-8 ">
        <Snippet hideCopyButton hideSymbol variant="bordered" className="w-full">
          <span className="text-center">
            Bültenlere göz atmak için <Link href="/docs" color="primary">tıklayınız</Link>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
