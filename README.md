# POS Vinyasa para Odoo 19

Módulo de personalización del Punto de Venta:

- Cambia la etiqueta del selector de cliente fiscal a **Nombre factura**.
- Agrega el botón **Cliente**, con una ventana de texto cuyo valor se guarda en el pedido.
- Cambia la etiqueta **Nota** a **Nota interna**.

## Instalación

1. Copie la carpeta `pos_vinyasa` en una ruta incluida en `addons_path`.
2. Actualice la lista de aplicaciones.
3. Instale **Vinyasa - Ajustes de Punto de Venta**.
4. Cierre y vuelva a abrir las sesiones del Punto de Venta que estuvieran activas.

El valor capturado con el botón **Cliente** se muestra en el campo **Cliente** del
formulario del pedido de Punto de Venta.
