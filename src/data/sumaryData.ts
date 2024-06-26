export type SummaryData = {
    principalTitle: string;
    sume: string;
    articleTitle1: string;
    text1: string;
    text2: string;
    text3: string;
    articleTitle2: string;
    text4: string;
    labelName1: string;
    labelList1: string[];
    labelName2: string;
    labelList2: string[];
    articleTitle3: string;
    text5: string;
    text7: string;
    articleTitle4: string;
    text8: string;
    subText1: string;
    subText2: string;
    subText3: string;
    subText4: string;
    articleTitle5: string;
};
export const summaryData: SummaryData = {
    principalTitle: 'Lenguaje de Marcas',
    sume: 'Donde encontraras información sobre los proyectos, portoflios y webs de la clase 1ºDAM de la asignatura Lenguaje de Marcas. ',
    articleTitle1: 'HTML y CSS',
    text1: 'HTML (HyperText Markup Language) y CSS (Cascading Style Sheets) son dos tecnologías fundamentales en el desarrollo web moderno. HTML sirve como el esqueleto estructural de una página web, definiendo la jerarquía y disposición de los elementos. Utiliza una sintaxis de marcado que incluye etiquetas para representar desde encabezados y párrafos hasta enlaces y formularios',
    text2: 'Por otro lado, CSS complementa HTML al encargarse de la presentación y estilo visual de la página. Permite controlar aspectos como colores, tipografías, márgenes y diseños, brindando a los desarrolladores un mayor control estético sobre el contenido. La separación de responsabilidades entre HTML y CSS facilita el mantenimiento del código y la adaptabilidad a diferentes dispositivos y tamaños de pantalla.',
    text3: 'La combinación de HTML y CSS es esencial para crear experiencias web atractivas y funcionales. HTML establece la estructura y la semántica del contenido, mientras que CSS proporciona la capa estilística que define la apariencia y la presentación. Esta sinergia entre ambas tecnologías ha sido clave para el desarrollo de sitios web modernos y responsivos, contribuyendo a la creación de interfaces intuitivas y atractivas en el vasto mundo de la World Wide Web',
    articleTitle2: 'Etiquetas',
    text4: 'Las etiquetas HTML son herramientas fundamentales que te permiten estructurar y formatear tu contenido para que sea fácilmente comprensible y atractivo para los lectores. Estas etiquetas son esenciales para definir diferentes partes de tu página web, como títulos, párrafos, imágenes, enlaces y más. Podemos agrupar las etiquetas en dos grandes grupos las etiquetas de bloque y en linea',
    labelName1: 'Etiquetas bloque',
    labelList1: [
        'h1: Titulo Principal(solo debe haber uno)',
        'h2...h6: Titulos secundarios',
        'p: Parrafo',
        'ul: Lista desordenada',
        'ol: Lista ordenada',
        'li: Elemento de lista',
        'img: Imagen',
        'table: Tabla',
        'div: Contenedor genérico',
        'header: Encabezado de sección',
        'footer: Pie de sección',
        'nav: Navegación',
        'section: Sección',
        'article: Artículo',
        'aside: Contenido relacionado',
        'main: Contenido principal',
        'figure: Figura',
        'figcaption: Leyenda de figura',
        'blockquote: Bloque de cita',
        'address: Dirección de contacto',
        'hr: Línea horizontal',
        'pre: Texto preformateado',
        'script: Script incrustado',
        'noscript: Contenido alternativo para scripts deshabilitados',
        'slot: Ranura para contenido en sombra',
        'template: Plantilla',
        'button: Botón',
        'datalist: Lista de opciones para controles de entrada',
        'fieldset: Grupo de controles de formulario',
        'form: Formulario',
        'input: Control de entrada',
        'label: Etiqueta de formulario',
        'legend: Leyenda de formulario',
        'meter: Medidor de escala',
        'optgroup: Grupo de opciones en un elemento select',
        'option: Opción en un elemento select',
        'output: Resultado de salida',
        'progress: Barra de progreso',
        'select: Lista desplegable',
        'textarea: Área de texto',
        'details: Detalles de interacción',
        'summary: Resumen de detalles',
        'dialog: Cuadro de diálogo',
        'menu: Lista de menú',
        'command: Comando de menú o botón',
        'menuitem: Elemento de menú',
    ],
    labelName2: 'Etiquetas en linea',
    labelList2: [
        'a: Hipervínculo',
        'abbr: Abreviatura',
        'cite: Cita',
        'code: Fragmento de código',
        'em: Énfasis',
        'strong: Importancia fuerte',
        'small: Texto pequeño',
        'sub: Subíndice',
        'sup: Sobrescrito',
        'br: Salto de línea',
        'i: Texto en cursiva',
        'b: Texto en negrita',
        'u: Texto subrayado',
        's: Texto tachado',
        'mark: Resaltado',
        'progress: Barra de progreso',
        'time: Fecha o tiempo',
        'del: Texto eliminado',
        'ins: Texto insertado',
        'q: Cita corta',
        'dfn: Término definido',
        'kbd: Entrada de teclado',
        'samp: Muestra de código',
        'var: Variable',
        'iframe: Marco en línea',
        'object: Objeto incrustado',
        'param: Parámetro de objeto',
        'embed: Contenido incrustado',
        'video: Reproductor de video',
        'audio: Reproductor de audio',
        'source: Fuente multimedia',
        'track: Pista de texto',
        'canvas: Lienzo gráfico',
        'map: Mapa de imagen',
        'area: Área de imagen',
        'svg: Gráficos vectoriales escalables',
        'math: Contenedor de fórmula matemática',
    ],
    articleTitle3: 'Especificidad de etiquetas',
    text5: 'La especificidad en CSS es un concepto crucial que determina qué regla se aplicará cuando existen múltiples estilos que compiten por afectar un mismo elemento en una página web. La especificidad se basa en la asignación de valores a cada tipo de selector, otorgándoles un peso relativo en la jerarquía de aplicación de estilos.',
    text7: 'La escala de especificidad se mide en cuatro partes: los selectores universales (*) tienen la menor especificidad, seguidos por los selectores de tipo (como <div> o <p>) los selectores de clase o atributo, y finalmente, los selectores de ID tienen la mayor especificidad. Cuando hay un empate en la especificidad, la regla que aparece más tarde en la hoja de estilos toma precedencia.',
    articleTitle4: 'SubClases',
    text8: 'En el contexto de las subclases, estas son un tipo específico de selector que se centra en elementos específicos dentro de un grupo más amplio. Por ejemplo, se pueden utilizar subclases para estilizar elementos particulares dentro de una lista o elementos de una tabla. Algunos ejemplos comunes de subclases incluyen:',
    subText1:
        ':hover: Se utiliza para aplicar estilos cuando el usuario pasa el cursor sobre un elemento, proporcionando interactividad visual.',
    subText2:
        ':nth-child(n): Permite seleccionar elementos específicos en función de su posición en relación con sus hermanos, facilitando el estilizado de elementos particulares en listas o grupos',
    subText3:
        ' :first-child y :last-child: Estos seleccionan el primer y último hijo de un elemento padre, respectivamente, lo que puede ser útil para aplicar estilos distintivos a estos elementos.',
    subText4:
        ' :not(selector): Permite seleccionar elementos que no cumplen con un criterio específico, ofreciendo flexibilidad en la aplicación de estilos condicionales.',
    articleTitle5: 'Referencias',
};
