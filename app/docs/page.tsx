"use client"
import { title, subtitle } from "@/components/primitives";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Chip } from "@heroui/chip";
import { motion } from "framer-motion"
import { Alert } from "@heroui/alert";
import { Breadcrumbs, BreadcrumbItem } from "@heroui/breadcrumbs";

export default function DocsPage() {
  const bulletins = [
    {
      id: "1",
      date: "Ocak 2024",
      title: "GÜTTO Ocak 2024 Bülteni",
      summary: "Ocak ayında gerçekleşen teknoloji ve inovasyon etkinlikleri, projeler ve duyurular.",
      content: "Bu bültende Gümüşhane Teknoloji Transfer Ofisi'nin Ocak ayı faaliyetleri, düzenlenen etkinlikler, yeni başlayan projeler ve önemli duyurular yer almaktadır.",
      image: "/bg9.jpg"
    },
    {
      id: "2",
      date: "Şubat 2024",
      title: "GÜTTO Şubat 2024 Bülteni",
      summary: "Şubat ayında gerçekleşen teknoloji ve inovasyon etkinlikleri, projeler ve duyurular.",
      content: "Bu bültende Gümüşhane Teknoloji Transfer Ofisi'nin Şubat ayı faaliyetleri, düzenlenen etkinlikler, yeni başlayan projeler ve önemli duyurular yer almaktadır.",
      image: "/images.jpeg"
    },
    {
      id: "3",
      date: "Mart 2024",
      title: "GÜTTO Mart 2024 Bülteni",
      summary: "Mart ayında gerçekleşen teknoloji ve inovasyon etkinlikleri, projeler ve duyurular.",
      content: "Bu bültende Gümüşhane Teknoloji Transfer Ofisi'nin Mart ayı faaliyetleri, düzenlenen etkinlikler, yeni başlayan projeler ve önemli duyurular yer almaktadır.",
      image: "/kapı.jpeg"
    }
  ];

  const upcomingEvents = [
    {
      id: "event1",
      title: "Teknoloji Girişimciliği Çalıştayı",
      date: "15 Nisan 2024",
      location: "GÜTTO Konferans Salonu",
      description: "Teknoloji girişimciliği ekosistemini geliştirmek için düzenlenen interaktif çalıştay."
    },
    {
      id: "event2",
      title: "Patent Başvuru Eğitimi",
      date: "22 Nisan 2024",
      location: "Çevrimiçi",
      description: "Patent başvuru süreçleri ve fikri mülkiyet hakları konusunda bilgilendirme eğitimi."
    },
    {
      id: "event3",
      title: "TÜBİTAK Proje Yazma Eğitimi",
      date: "5 Mayıs 2024",
      location: "GÜTTO Seminer Salonu",
      description: "TÜBİTAK projelerinin hazırlanması ve başvuru süreçleri hakkında kapsamlı eğitim."
    }
  ];

  const announcements = [
    {
      id: "ann1",
      title: "TÜBİTAK 1001 Programı Başvuruları Başladı",
      date: "10 Nisan 2024",
      priority: "Yüksek",
      description: "TÜBİTAK 1001 Bilimsel ve Teknolojik Araştırma Projelerini Destekleme Programı başvuruları başlamıştır. Son başvuru tarihi: 30 Mayıs 2024."
    },
    {
      id: "ann2",
      title: "Teknoloji Transfer Ofisi Personel Alımı",
      date: "5 Nisan 2024",
      priority: "Orta",
      description: "GÜTTO bünyesinde çalışacak Proje Uzmanı ve Patent Uzmanı pozisyonları için başvurular başlamıştır."
    },
    {
      id: "ann3",
      title: "Üniversite-Sanayi İşbirliği Protokolü İmzalandı",
      date: "1 Nisan 2024",
      priority: "Bilgi",
      description: "Gümüşhane Üniversitesi ile bölgedeki sanayi kuruluşları arasında işbirliği protokolü imzalanmıştır."
    }
  ];

  return (
    <div className="w-full  mx-auto py-8">
      <Breadcrumbs className="mb-6">
        <BreadcrumbItem href="/">Ana Sayfa</BreadcrumbItem>
        <BreadcrumbItem href="/docs">Bültenler</BreadcrumbItem>
      </Breadcrumbs>
      
      <div className="text-center mb-10">
        <h1 className={title()}>GÜTTO E-Bültenleri</h1>
        <p className={subtitle({ class: "mt-4" })}>
          Gümüşhane Teknoloji Transfer Ofisi'nin aylık bültenlerini buradan inceleyebilirsiniz.
        </p>
      </div>

      <Alert className="mb-6" color="primary">
        Yeni Nisan 2024 bültenimiz yakında yayınlanacaktır. Takipte kalın!
      </Alert>

      <div className="flex flex-col md:flex-row gap-4">

        {bulletins.map((bulletin) => (
          <Card key={bulletin.id} className="py-4 h-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{bulletin.date}</p>
              <h4 className="font-bold text-large">{bulletin.title}</h4>
              <small className="text-default-500">{bulletin.summary}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt={bulletin.title}
                className="object-cover rounded-xl w-full h-[140px]"
                src={bulletin.image}
                fallbackSrc="https://via.placeholder.com/300x140?text=GÜTTO+Bülten"
              />
            </CardBody>
            <CardFooter className="justify-end">
              <Link
                className={buttonStyles({
                  color: "primary",
                  variant: "flat",
                })}
                href={`/docs/${bulletin.id}`}
              >
                Bülteni Oku
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Divider className="my-8" />

      <div className="mb-10">
        <h2 className={title({ size: "sm" })}>Yaklaşan Etkinlikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="py-2">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-medium">{event.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <Chip size="sm" color="primary">{event.date}</Chip>
                  <Chip size="sm" variant="flat">{event.location}</Chip>
                </div>
              </CardHeader>
              <CardBody className="py-2">
                <p className="text-sm">{event.description}</p>
              </CardBody>
              <CardFooter className="justify-end">
                <Link
                  className={buttonStyles({
                    color: "primary",
                    variant: "light",
                    size: "sm"
                  })}
                  href={`/events/${event.id}`}
                >
                  Detaylar
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Divider className="my-8" />

      <div className="mb-10">
        <h2 className={title({ size: "sm" })}>Duyurular</h2>
        <Alert className="my-4" color="warning">
          Önemli: TÜBİTAK 1001 Programı başvuru son tarihi yaklaşıyor!
        </Alert>
        <div className="flex flex-col gap-4 mt-6">
          {announcements.map((announcement) => (
            <Card key={announcement.id} className="py-2">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex justify-between w-full">
                  <h4 className="font-bold text-medium">{announcement.title}</h4>
                  <Chip 
                    size="sm" 
                    color={announcement.priority === "Yüksek" ? "danger" : announcement.priority === "Orta" ? "warning" : "success"}
                  >
                    {announcement.priority}
                  </Chip>
                </div>
                <small className="text-default-500">{announcement.date}</small>
              </CardHeader>
              <CardBody className="py-2">
                <p className="text-sm">{announcement.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <Divider className="my-8" />

      <div className="mb-10">
        <h2 className={title({ size: "sm" })}>Arşiv Bültenleri</h2>
        <Accordion className="w-full mt-6">
          <AccordionItem key="1" aria-label="2023 Bültenleri" title="2023 Bültenleri">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
              <Link href="/docs/archive/2023-12">Aralık 2023 Bülteni</Link>
              <Link href="/docs/archive/2023-11">Kasım 2023 Bülteni</Link>
              <Link href="/docs/archive/2023-10">Ekim 2023 Bülteni</Link>
              <Link href="/docs/archive/2023-09">Eylül 2023 Bülteni</Link>
            </div>
          </AccordionItem>
          <AccordionItem key="2" aria-label="2022 Bültenleri" title="2022 Bültenleri">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
              <Link href="/docs/archive/2022-12">Aralık 2022 Bülteni</Link>
              <Link href="/docs/archive/2022-11">Kasım 2022 Bülteni</Link>
              <Link href="/docs/archive/2022-10">Ekim 2022 Bülteni</Link>
              <Link href="/docs/archive/2022-09">Eylül 2022 Bülteni</Link>
            </div>
          </AccordionItem>
          <AccordionItem key="3" aria-label="2021 Bültenleri" title="2021 Bültenleri">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
              <Link href="/docs/archive/2021-12">Aralık 2021 Bülteni</Link>
              <Link href="/docs/archive/2021-11">Kasım 2021 Bülteni</Link>
              <Link href="/docs/archive/2021-10">Ekim 2021 Bülteni</Link>
              <Link href="/docs/archive/2021-09">Eylül 2021 Bülteni</Link>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
