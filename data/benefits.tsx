import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiMenu,
  FiHome,
  FiCompass,
  FiUsers,
  FiBook,
  FiUserCheck,
  FiFilter,
  FiZap,
  FiHeart,
  FiFolder,
  FiCheckCircle,
  FiAward,
  FiBookOpen,
  FiDownload,
  FiCpu,
  FiCalendar,
  FiCamera,
  FiMap,
} from "react-icons/fi";
import { IBenefit } from "@/types";
import BalanceFeature from "@/components/BalanceFeature";
import { ExploreSection } from "@/components/ExploreSection";
import { HomeSection } from "@/components/HomeSection";
import { LibrarySection } from "@/components/LibrarySection";
import { FileClock } from "lucide-react";
import { SessionSection } from "@/components/SessionSection";
import { IntegrationSection } from "@/components/IntegrationSection";
import { StorageRequestSection } from "@/components/StorageRequestSection";
import { RentDepotSection } from "@/components/RentDepotSection";
import { StorageTrackSection } from "@/components/StorageTrackSection";

export const benefits: IBenefit[] = [
  {
    title: "Geçici Depo İhtiyacını Karşıla",
    description:
      "Türkiye genelindeki onaylı KOBİ depolarından sana en uygun olanı yapay zekâ ile biz seçiyoruz. Sadece ihtiyacın olan alanı ve süreyi gir, eşyaların için güvenli bir yer hemen hazır olsun. Uzun vadeli sözleşmelere gerek yok — yalnızca kullandığın kadar öde.",
    bullets: [
      {
        title: "Zaman Dilimi ile Rezervasyon",
        description:
          "İstediğin gün ve saat aralığında depolama için rezervasyon oluştur.",
        icon: <FiCalendar size={26} />,
      },
      {
        title: "Yapay Zekâ Destekli Lokasyon Eşleştirmesi",
        description:
          "Algoritmalarımız; doluluk oranı, trafik, fiyat ve talep yoğunluğuna göre senin için en uygun depoyu önerir.",
        icon: <FiCpu size={26} />,
      },
      {
        title: "Kullandığın Kadar Öde",
        description:
          "Sabit ücret yok! Depolama süresi ve alanına göre adil ve şeffaf ücretlendirme.",
        icon: <FiDollarSign size={26} />,
      },
    ],
    component: <StorageRequestSection />,
  },

  {
    title: "Deponu Paylaşıma Aç ve Gelir Elde Et",
    description:
      "Kullanılmayan depo alanını bizimle paylaş, platforma entegre ol ve pasif gelir elde etmeye başla. Fiziksel alanını dijitalleştir, biz de sana müşteri getirelim.",
    bullets: [
      {
        title: "Kapsamlı Güvenlik Sistemi",
        description:
          "Kamera, alarm ve RFID sistemleriyle desteklenen güvenli altyapıyla içiniz rahat etsin.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Gelir Takibi ve Raporlama",
        description:
          "Her rezervasyon, kira ödemesi ve komisyonun detaylı takibi panel üzerinden yapılabilir.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "KOBİ Odaklı Kullanım Kolaylığı",
        description:
          "KOBİ’ler için özel hazırlanmış arayüzle kolay kullanım ve hızlı rezervasyon yönetimi.",
        icon: <FiBriefcase size={26} />,
      },
    ],
    component: <RentDepotSection />,
  },

  {
    title: "Depo Takip Sistemi",
    description:
      "Türkiye geneline yayılmış güvenilir KOBİ depolarıyla merkezi bir fiziksel bulut ağı kurduk. Tüm operasyon tek panelde senin kontrolünde.",
    bullets: [
      {
        title: "Canlı Konum ve Geçmiş Takibi",
        description:
          "Eşyalarının nerede, ne zamandır depolandığını harita üzerinden takip et. Hareket geçmişini zaman çizelgesiyle görüntüle.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Akıllı Dağıtım ve Transfer",
        description:
          "Yoğunluk, trafik ve talep durumuna göre optimize edilmiş lojistik algoritması ile eşyaların en verimli şekilde yönlendirilir.",
        icon: <FiTrendingUp size={26} />,
      },
      {
        title: "Canlı Kamera ve Görsel Erişim",
        description:
          "Depo içerisindeki kameralar aracılığıyla eşyalarını canlı olarak izle veya belirli aralıklarla eklenen görselleri incele.",
        icon: <FiCheckCircle size={26} />,
      },
    ],
    component: <StorageTrackSection />,
  },
];
