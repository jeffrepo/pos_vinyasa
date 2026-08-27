{
    "name": "Vinyasa - Ajustes de Punto de Venta",
    "version": "19.0.1.0.0",
    "category": "Sales/Point of Sale",
    "summary": "Personaliza las etiquetas y agrega el nombre del cliente al pedido del POS",
    "author": "Vinyasa",
    "license": "LGPL-3",
    "depends": ["point_of_sale"],
    "data": [
        "views/pos_order_views.xml",
    ],
    "assets": {
        "point_of_sale._assets_pos": [
            "pos_vinyasa/static/src/**/*",
        ],
    },
    "installable": True,
    "application": False,
}
