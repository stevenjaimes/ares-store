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
        imageSrc: "/nav/cocina/utensilios-cocina.jpeg",
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
        imageSrc: "/nav/baños/toalleros.jpg",
      },
      {
        name: "Organizadores de baño",
        href: "/productos?categoria=baño&subcategoria=organizadores-baño",
        imageSrc: "/nav/baños/organizadores.jpg",
      },
      {
        name: "Cortinas de ducha",
        href: "/productos?categoria=baño&subcategoria=cortinas-ducha",
        imageSrc: "/nav/baños/cortinas.jpg",
      },
    ],
  },
  // ... agrega las demás categorías que deseas
];