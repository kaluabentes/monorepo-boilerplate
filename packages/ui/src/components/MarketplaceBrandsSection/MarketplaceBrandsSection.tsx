import Buygoods from "./brands/Buygoods"
import ClickBank from "./brands/ClickBank"
import Digistore24 from "./brands/Digistore24"
import Hotmart from "./brands/Hotmart"
import Kiwify from "./brands/Kiwify"
import Monetizze from "./brands/Monetizze"
import styles from "./MarketplaceBrandsSection.module.css"

const brands = [
  {
    src: <ClickBank />,
    alt: "ClickBank",
  },
  {
    src: <Buygoods />,
    alt: "Buygoods",
  },
  {
    src: <Digistore24 />,
    alt: "Digistore24",
  },
  {
    src: <Hotmart />,
    alt: "Hotmart",
  },
  {
    src: <Kiwify />,
    alt: "Kiwify",
  },
  {
    src: <Monetizze />,
    alt: "Monetizze",
  },
]

export default function MarketplaceBrandsSection() {
  return (
    <section className={styles.container}>
      {brands.map((brand) => (
        <div
          className={styles.brand}
          role="img"
          aria-label={brand.alt}
          key={brand.alt}
        >
          {brand.src}
        </div>
      ))}
    </section>
  )
}
