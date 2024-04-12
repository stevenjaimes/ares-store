export const PRODUCT_CATEGORIES = [
  {
    label: "Cocina",
    value: "cocina" as const,
    featured: [
      {
        name: "Escurridores",
        href: "/productos?categoria=cocina&subcategoria=escurridores",
        imageSrc: "/nav/cocina/escurridores.jpg",
      },
      {
        name: "Organizadores de alacenas",
        href: "/productos?categoria=cocina&subcategoria=organizadores-alacenas",
        imageSrc: "/nav/cocina/organizadores.jpg",
      },
      {
        name: "Utensilios de cocina",
        href: "/productos?categoria=cocina&subcategoria=utensilios-cocina",
        imageSrc: "/nav/cocina/utensilios-cocina.jpg",
      },
    ],
  },
  {
    label: "Baño",
    value: "baño" as const,
    featured: [
      {
        name: "Toalleros",
        href: "/productos?categoria=baño&subcategoria=toalleros",
        imageSrc: "/imagenes/categorias/baño/toalleros.jpg",
      },
      {
        name: "Organizadores de baño",
        href: "/productos?categoria=baño&subcategoria=organizadores-baño",
        imageSrc: "/imagenes/categorias/baño/organizadores-baño.jpg",
      },
      {
        name: "Cortinas de ducha",
        href: "/productos?categoria=baño&subcategoria=cortinas-ducha",
        imageSrc: "/imagenes/categorias/baño/cortinas-ducha.jpg",
      },
    ],
  },
  // ... agrega las demás categorías que deseas
];