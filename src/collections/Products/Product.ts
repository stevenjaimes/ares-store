import { PRODUCT_CATEGORIES } from "../../config";
import { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: "name",
      label: "Nombre del Producto",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Detalles del producto",
      type: "richText",
      required: true,
    },
    {
      name: "price",
      label: "Precio en $COP",
      min: 0,
      max: 800000,
      type: "number",
      required: true,
    },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
      required: true,
    },

    /*{
      name: "product_files",
      label: "Archivos de Productos",
      type: "relationship",
      relationTo: "product_files",
      required: true,
      hasMany: false,
    },*/
    {
      name: "approvedForSale",
      label: "Aprobado para venta",
      type: "select",
      defaultValue: "Pendiente",
      access: {
        create: ({ req }) => req.user.role === "admin",
        read: ({ req }) => req.user.role === "admin",
        update: ({ req }) => req.user.role === "admin",
      },
      options: [
        {
          label: "Pendiente de Verificación",
          value: "Pendiente",
        },
        {
          label: "Aprobado",
          value: "Aprobado",
        },
        {
          label: "Rechazado",
          value: "Rechazado",
        },
      ],
    },
    {
      name: "priceId",
      access: {
        read: () => false,
        create: () => false,
        update: () => false,
      },
      label: "ID de Precio",
      type: "text",
      admin: {
        hidden: true,
      },
    },
    {
      name: "images",
      type: "array",
      label: "Imagenes",
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        singular: "Imagen",
        plural: "Imagenes",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
