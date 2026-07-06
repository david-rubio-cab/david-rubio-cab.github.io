const translations = {
  en: {
    "nav-home": "HOME",
    "nav-aboutme": "ABOUT ME",
    "nav-skills": "SKILLS",
    "nav-curriculum": "CURRICULUM",
    "nav-portfolio": "PROJECTS",
    "nav-contact": "CONTACT",

    "init-role": "AI Engineer - ML & Data Scientist",

    "aboutme-title": "About Me",
    "aboutme-desc": `<span>¡Hello!, I'm David Rubio.</span>
            "I'm a Python Engineer with a Bachelor's Degree in Software Engineer and a Master's
            Degree in Applied Artficial Intelligence. I specialize in the development of Natural
            Language Processing and Big Data algorithms, using different libraries such as PyTorch,
            TensorFlow and pandas. I also have hands-on experience automating business workflows with
            AI, from fine-tuning large language models like Qwen 72B to building agentic AI systems
            that autonomously orchestrate tools and processes end to end. Also, I have good teamwork
            skills and actively contribute with my ideas what allows me to learn from the perspectives
            and experiences of other engineers."`,
    "aboutme-personal-title": "Personal Data",
    "aboutme-birthday-label": "Birthday",
    "aboutme-email-label": "Email",
    "aboutme-interests-title": "Interests",
    "interest-videogames": "VIDEOGAMES",
    "interest-music": "MUSIC",
    "interest-travel": "TRAVEL",
    "interest-movies": "MOVIES & SERIES",
    "interest-books": "BOOKS",
    "aboutme-cv-button": "DOWNLOAD CV",

    "skills-title": "Skills",
    "skills-soft-title": "Professional Skills",
    "skill-teamwork": "🤝 Teamwork",
    "skill-communication": "💬 Communication",
    "skill-problem-solving": "🛠️ Problem Solving",
    "skill-project-management": "📋 Project Management",
    "skill-adaptability": "💧 Adaptability",

    "curriculum-title": "Curriculum",
    "curriculum-education-title": "Education",
    "curriculum-experience-title": "Experience",

    "edu-master-title": "Master's Degree in Applied Artifial Intelligence",
    "edu-master-home": "IEP & SUMMA - Madrid, Spain",
    "edu-master-body": `<ul>
                            <li><u>Main Areas:</u> Computer Vision, Machine Learning, AI ethics, NLP, Python, Data Science, Time Series & Recommendation Systems.</li>
                            <li><u>Best Projects:</u>
                            <ul>
                                <li>A cloud recommendation system.</li>
                                <li>A computer vision application that detects people and objects in an image.</li>
                                <li>A data science project where I cleaned a CSV deleting the duplicates and the null values
                                    to feed a Machine Learning algorithm with the purpose of detecting possible frauds.</li>
                            </ul>
                            </li>
                        </ul>`,

    "edu-bachelor-title": "Bachelor's Degree in Sorftware Engineering",
    "edu-bachelor-home": "Rey Juan Carlos University - Madrid, Spain",
    "edu-bachelor-body": `<ul>
                            <li><u>Main Areas:</u> Algorithms, data Structures, web development, data bases, object-oriented programming,
                                software application develpoment & agile methodology.</li>
                            <li><u>Best Projects:</u>
                                <ul>
                                <li>Web Application with <strong>Node.js</strong>, <strong>MySQL</strong>, <strong>Angular</strong> & <strong>Docker</strong>.</li>
                                <li>Mobile game with the purpose of teaching logic gates and binary numbers to young students.</li>
                                </ul>
                            </li>
                        </ul>`,

    "exp-ntt-title": "AI Developer",
    "exp-ntt-body": `I work developing agentic AI solutions, designing and building autonomous agents that
                        orchestrate tools and workflows to solve complex business problems.`,

    "exp-carmon-title": "AI Developer",
    "exp-carmon-body": `I automated construction workflows using AI tools, including fine-tuning a Qwen 72B model
                        for the company. I also built an application to manage every aspect of a construction site,
                        from automatic supplier contact to invoice reading, analysis and chart generation.`,

    "exp-mixreal-title": "Intern as AI Developer",
    "exp-mixreal-body": `I worked creating AI solutions such as a chatbot and a hole pipe to personalize images with
                        a custom prompt send to and AI API. All of this thanks to the use of different tools of AWS, for example
                        EC2, S3, RDS, Lambda and SageMaker.`,

    "portfolio-title": "Projects",
    "portfolio-see-project": "See Project",

    "proj-cv-title": "Computer Vision",
    "proj-cv-body": `This project implements an image similarity–based clothing recommendation system using a pretrained VGG16 model.
            Images are processed to extract deep visual features, which are then normalized and compared using cosine similarity.
            Given a query image, the system recommends visually similar clothing items from a catalog dataset, demonstrating how
            convolutional neural networks can be used for content-based image retrieval.`,

    "proj-ml-title": "Machine Learning",
    "proj-ml-body": `This project addresses the problem of bank account fraud detection using a synthetic dataset published at NeurIPS 2022.
            The dataset includes transaction, account, and device-related features. The goal is to predict fraudulent transactions in
            a highly imbalanced dataset.`,

    "proj-dl-title": "Deep Learning",
    "proj-dl-body": `Multi-class image classification model to detect COVID-19, Viral Pneumonia, and Normal cases using the COVID-19 Radiography Database (Kaggle).
            Implemented Transfer Learning with EfficientNetB3 (TensorFlow/Keras), applied data preprocessing and augmentation with ImageDataGenerator, and performed
            selective fine-tuning to optimize generalization. Achieved ~70% test accuracy on a limited medical imaging dataset.
            Technologies: Python, TensorFlow, Keras, EfficientNetB3, NumPy, Pandas, Matplotlib, OpenCV, Scikit-learn.`,

    "proj-ds-title": "Data Science",
    "proj-ds-body": `End-to-end data preprocessing and exploratory analysis project on a highly imbalanced bank account fraud dataset (1M+ records) published in NeurIPS 2022.
            Performed advanced data cleaning, missing value imputation (group-based median strategy), categorical encoding (One-Hot Encoding), feature engineering, outlier analysis, and dimensionality reduction (PCA).
            Applied statistical hypothesis testing (T-test, Chi-square) for feature selection and correlation analysis to remove redundant variables. Managed severe class imbalance (~1.1% fraud rate) and optimized the
            dataset for downstream binary classification modeling. Final dataset prepared for machine learning modeling and dimensionality reduction.
            Technologies: Python, Pandas, NumPy, Matplotlib, Seaborn, SciPy, Scikit-learn (StandardScaler, PCA), Statistical Testing, Feature Engineering.`,

    "proj-ts-title": "Time Series",
    "proj-ts-body": `End-to-end time series forecasting project using weekly influenza incidence data. Performed data cleaning, interpolation of missing values, stationarity testing (ADF test), seasonal decomposition,
            and distribution analysis. Applied log transformation and Robust Scaling to handle skewness and zero inflation (41% zeros).
            Implemented time delay embedding (lag features) and engineered temporal predictors (month, weekday, holidays). Compared traditional Machine Learning models (Linear Regression, Random Forest, XGBoost)
            with Deep Learning architectures (RNN, LSTM, GRU) built in PyTorch.
            Random Forest achieved strong performance among ML models, while LSTM outperformed all models (R² ≈ 0.99), effectively capturing seasonal patterns and sequential dependencies.
            Technologies: Python, Pandas, NumPy, Scikit-learn, XGBoost, Statsmodels, PyTorch (RNN/LSTM/GRU), Plotly, Matplotlib, Time Series Analysis, Feature Engineering.`,

    "proj-rs-title": "Recommendation System",
    "proj-rs-body": `Item-based recommendation system using the MovieLens 100K dataset. Performed data cleaning, null handling, and construction of a user–item rating matrix. Implemented cosine similarity to compute movie-to-movie
            similarity and built a recommendation function that returns the Top-N most similar titles based on user rating patterns. The system generates interpretable similarity scores and demonstrates how collaborative filtering
            can capture latent user preferences without explicit content features.
            Technologies: Python, Pandas, NumPy, Scikit-learn (cosine_similarity), Matplotlib, Collaborative Filtering, Recommender Systems.`,

    "proj-nlp-title": "NLP",
    "proj-nlp-body": ` NLP Sentiment Analysis project for binary sentiment classification using the Yelp Review dataset. Performed text preprocessing (normalization, tokenization, stopword removal, lemmatization) and feature engineering with
              TF-IDF, PCA visualization, Word2Vec embeddings, and BERT contextual embeddings.
              Trained custom Bidirectional LSTM (PyTorch) models using averaged Word2Vec representations and evaluated performance using Accuracy, Precision, Recall, F1-score, and Confusion Matrix. Additionally, extracted sentence-level
              embeddings from BERT (bert-base-uncased) for downstream modeling.
              The project compares classical vectorization techniques with neural embeddings and transformer-based representations in a full NLP pipeline.
              Technologies: Python, Pandas, NumPy, NLTK, Gensim (Word2Vec, Doc2Vec), Scikit-learn (TF-IDF, PCA, metrics), PyTorch (LSTM), Hugging Face Transformers (BERT), Sentence-Transformers, Matplotlib, Seaborn, Plotly.`,

    "proj-bp-title": "Base Python",
    "proj-bp-body": `Python project for managing patient and doctor data in a hospital emergency department. Implemented functionalities for patient registration, clinical history management, admission/discharge tracking, and secure doctor
            authentication. Developed modules for reading and writing patient histories to CSV, validating inputs (DNI, age), and handling exceptions. Built a comprehensive menu-driven interface allowing doctors to register patients,
            query patient information and clinical history, update discharge dates, and add medical notes. Ensured security with login authentication and password validation for medical staff.
            The project integrates file I/O, dictionary-based data structures, date handling, regular expressions, and exception management to create a fully functional hospital management system.
            Technologies: Python, CSV, datetime, re, exception handling, input validation, procedural programming, menu-driven CLI.`,

    "contact-title": "Contact",
    "contact-intro": "For any query do not hesitate to contact me:",
    "contact-send-email": "Send Email",
    "contact-location": "Madrid, Spain",
    "contact-email-label": "Email: davidrubcab@gmail.com",

    "footer-copyright": "© 2026 David Ovidio Rubio Caballero. All rights reserved.",
  },

  es: {
    "nav-home": "INICIO",
    "nav-aboutme": "SOBRE MÍ",
    "nav-skills": "HABILIDADES",
    "nav-curriculum": "CURRÍCULUM",
    "nav-portfolio": "PROYECTOS",
    "nav-contact": "CONTACTO",

    "init-role": "Ingeniero de IA - ML y Científico de Datos",

    "aboutme-title": "Sobre Mí",
    "aboutme-desc": `<span>¡Hola!, soy David Rubio.</span>
            "Soy Ingeniero en Python con un Grado en Ingeniería del Software y un Máster
            en Inteligencia Artificial Aplicada. Me especializo en el desarrollo de algoritmos de
            Procesamiento del Lenguaje Natural y Big Data, utilizando librerías como PyTorch,
            TensorFlow y pandas. También tengo experiencia práctica automatizando flujos de trabajo
            empresariales con IA, desde el fine-tuning de modelos de lenguaje como Qwen 72B hasta la
            construcción de sistemas de IA agéntica que orquestan herramientas y procesos de forma
            autónoma de principio a fin. Además, tengo buenas habilidades de trabajo en equipo y
            aporto ideas activamente, lo que me permite aprender de las perspectivas y experiencias
            de otros ingenieros."`,
    "aboutme-personal-title": "Datos Personales",
    "aboutme-birthday-label": "Cumpleaños",
    "aboutme-email-label": "Correo",
    "aboutme-interests-title": "Intereses",
    "interest-videogames": "VIDEOJUEGOS",
    "interest-music": "MÚSICA",
    "interest-travel": "VIAJES",
    "interest-movies": "PELÍCULAS Y SERIES",
    "interest-books": "LIBROS",
    "aboutme-cv-button": "DESCARGAR CV",

    "skills-title": "Habilidades",
    "skills-soft-title": "Habilidades Profesionales",
    "skill-teamwork": "🤝 Trabajo en equipo",
    "skill-communication": "💬 Comunicación",
    "skill-problem-solving": "🛠️ Resolución de problemas",
    "skill-project-management": "📋 Gestión de proyectos",
    "skill-adaptability": "💧 Adaptabilidad",

    "curriculum-title": "Currículum",
    "curriculum-education-title": "Educación",
    "curriculum-experience-title": "Experiencia",

    "edu-master-title": "Máster en Inteligencia Artificial Aplicada",
    "edu-master-home": "IEP & SUMMA - Madrid, España",
    "edu-master-body": `<ul>
                            <li><u>Áreas principales:</u> Visión por Computador, Machine Learning, ética de la IA, PLN, Python, Ciencia de Datos, Series Temporales y Sistemas de Recomendación.</li>
                            <li><u>Mejores proyectos:</u>
                            <ul>
                                <li>Un sistema de recomendación en la nube.</li>
                                <li>Una aplicación de visión por computador que detecta personas y objetos en una imagen.</li>
                                <li>Un proyecto de ciencia de datos donde limpié un CSV eliminando duplicados y valores nulos
                                    para alimentar un algoritmo de Machine Learning con el objetivo de detectar posibles fraudes.</li>
                            </ul>
                            </li>
                        </ul>`,

    "edu-bachelor-title": "Grado en Ingeniería del Software",
    "edu-bachelor-home": "Universidad Rey Juan Carlos - Madrid, España",
    "edu-bachelor-body": `<ul>
                            <li><u>Áreas principales:</u> Algoritmos, estructuras de datos, desarrollo web, bases de datos, programación orientada a objetos,
                                desarrollo de aplicaciones software y metodología ágil.</li>
                            <li><u>Mejores proyectos:</u>
                                <ul>
                                <li>Aplicación web con <strong>Node.js</strong>, <strong>MySQL</strong>, <strong>Angular</strong> y <strong>Docker</strong>.</li>
                                <li>Videojuego móvil con el objetivo de enseñar puertas lógicas y números binarios a estudiantes jóvenes.</li>
                                </ul>
                            </li>
                        </ul>`,

    "exp-ntt-title": "Desarrollador de IA",
    "exp-ntt-body": `Trabajo desarrollando soluciones de IA agéntica, diseñando y construyendo agentes autónomos que
                        orquestan herramientas y flujos de trabajo para resolver problemas de negocio complejos.`,

    "exp-carmon-title": "Desarrollador de IA",
    "exp-carmon-body": `Automaticé flujos de trabajo de construcción usando herramientas de IA, incluyendo el fine-tuning
                        de un modelo Qwen 72B para la empresa. También construí una aplicación para gestionar todos los aspectos
                        de una obra, desde el contacto automático con proveedores hasta la lectura, análisis y generación de gráficas de facturas.`,

    "exp-mixreal-title": "Becario como Desarrollador de IA",
    "exp-mixreal-body": `Trabajé creando soluciones de IA como un chatbot y un pipeline para personalizar imágenes con
                        un prompt personalizado enviado a una API de IA. Todo ello gracias al uso de distintas herramientas de AWS, como
                        EC2, S3, RDS, Lambda y SageMaker.`,

    "portfolio-title": "Proyectos",
    "portfolio-see-project": "Ver Proyecto",

    "proj-cv-title": "Visión por Computador",
    "proj-cv-body": `Este proyecto implementa un sistema de recomendación de ropa basado en similitud de imágenes usando un modelo VGG16 preentrenado.
            Las imágenes se procesan para extraer características visuales profundas, que luego se normalizan y comparan mediante similitud coseno.
            Dada una imagen de consulta, el sistema recomienda prendas visualmente similares de un catálogo, demostrando cómo
            las redes neuronales convolucionales pueden usarse para la recuperación de imágenes basada en contenido.`,

    "proj-ml-title": "Machine Learning",
    "proj-ml-body": `Este proyecto aborda la detección de fraude en cuentas bancarias usando un dataset sintético publicado en NeurIPS 2022.
            El dataset incluye características de transacciones, cuentas y dispositivos. El objetivo es predecir transacciones fraudulentas en
            un dataset altamente desbalanceado.`,

    "proj-dl-title": "Deep Learning",
    "proj-dl-body": `Modelo de clasificación de imágenes multiclase para detectar COVID-19, Neumonía Vírica y casos Normales usando la COVID-19 Radiography Database (Kaggle).
            Implementé Transfer Learning con EfficientNetB3 (TensorFlow/Keras), apliqué preprocesamiento y aumento de datos con ImageDataGenerator, y realicé
            fine-tuning selectivo para optimizar la generalización. Se alcanzó ~70% de precisión en test sobre un dataset médico limitado.
            Tecnologías: Python, TensorFlow, Keras, EfficientNetB3, NumPy, Pandas, Matplotlib, OpenCV, Scikit-learn.`,

    "proj-ds-title": "Ciencia de Datos",
    "proj-ds-body": `Proyecto completo de preprocesamiento y análisis exploratorio sobre un dataset de fraude bancario altamente desbalanceado (1M+ registros) publicado en NeurIPS 2022.
            Realicé limpieza avanzada de datos, imputación de valores faltantes (estrategia de mediana por grupos), codificación categórica (One-Hot Encoding), ingeniería de características, análisis de outliers y reducción de dimensionalidad (PCA).
            Apliqué pruebas de hipótesis estadísticas (T-test, Chi-cuadrado) para selección de características y análisis de correlación para eliminar variables redundantes. Gestioné un desbalance de clases severo (~1.1% de fraude) y optimicé el
            dataset para el modelado de clasificación binaria posterior. Dataset final preparado para modelado de machine learning y reducción de dimensionalidad.
            Tecnologías: Python, Pandas, NumPy, Matplotlib, Seaborn, SciPy, Scikit-learn (StandardScaler, PCA), pruebas estadísticas, ingeniería de características.`,

    "proj-ts-title": "Series Temporales",
    "proj-ts-body": `Proyecto completo de predicción de series temporales usando datos semanales de incidencia de gripe. Realicé limpieza de datos, interpolación de valores faltantes, pruebas de estacionariedad (test ADF), descomposición estacional
            y análisis de distribución. Apliqué transformación logarítmica y Robust Scaling para manejar la asimetría y la inflación de ceros (41% ceros).
            Implementé time delay embedding (variables de retardo) y diseñé predictores temporales (mes, día de la semana, festivos). Comparé modelos tradicionales de Machine Learning (Regresión Lineal, Random Forest, XGBoost)
            con arquitecturas de Deep Learning (RNN, LSTM, GRU) construidas en PyTorch.
            Random Forest obtuvo un buen rendimiento entre los modelos de ML, mientras que LSTM superó a todos los modelos (R² ≈ 0.99), capturando eficazmente patrones estacionales y dependencias secuenciales.
            Tecnologías: Python, Pandas, NumPy, Scikit-learn, XGBoost, Statsmodels, PyTorch (RNN/LSTM/GRU), Plotly, Matplotlib, análisis de series temporales, ingeniería de características.`,

    "proj-rs-title": "Sistema de Recomendación",
    "proj-rs-body": `Sistema de recomendación basado en ítems usando el dataset MovieLens 100K. Realicé limpieza de datos, manejo de nulos, y construcción de una matriz de valoraciones usuario-ítem. Implementé similitud coseno para calcular la
            similitud entre películas y construí una función de recomendación que devuelve los Top-N títulos más similares según los patrones de valoración de los usuarios. El sistema genera puntuaciones de similitud interpretables y demuestra cómo el filtrado colaborativo
            puede capturar preferencias latentes de usuario sin características de contenido explícitas.
            Tecnologías: Python, Pandas, NumPy, Scikit-learn (cosine_similarity), Matplotlib, filtrado colaborativo, sistemas de recomendación.`,

    "proj-nlp-title": "PLN",
    "proj-nlp-body": ` Proyecto de análisis de sentimiento (PLN) para clasificación binaria de sentimiento usando el dataset de reseñas de Yelp. Realicé preprocesamiento de texto (normalización, tokenización, eliminación de stopwords, lematización) e ingeniería de características con
              TF-IDF, visualización PCA, embeddings Word2Vec y embeddings contextuales BERT.
              Entrené modelos LSTM Bidireccional personalizados (PyTorch) usando representaciones Word2Vec promediadas y evalué el rendimiento con Accuracy, Precision, Recall, F1-score y matriz de confusión. Además, extraje embeddings a nivel de frase
              de BERT (bert-base-uncased) para modelado posterior.
              El proyecto compara técnicas clásicas de vectorización con embeddings neuronales y representaciones basadas en transformers en un pipeline de PLN completo.
              Tecnologías: Python, Pandas, NumPy, NLTK, Gensim (Word2Vec, Doc2Vec), Scikit-learn (TF-IDF, PCA, métricas), PyTorch (LSTM), Hugging Face Transformers (BERT), Sentence-Transformers, Matplotlib, Seaborn, Plotly.`,

    "proj-bp-title": "Python Básico",
    "proj-bp-body": `Proyecto en Python para gestionar datos de pacientes y médicos en un servicio de urgencias hospitalario. Implementé funcionalidades para registro de pacientes, gestión de historial clínico, seguimiento de ingresos/altas, y autenticación
            segura de médicos. Desarrollé módulos para leer y escribir historiales de pacientes en CSV, validar entradas (DNI, edad), y manejar excepciones. Construí una interfaz de menú completa que permite a los médicos registrar pacientes,
            consultar información e historial clínico, actualizar fechas de alta, y añadir notas médicas. Garanticé la seguridad con autenticación de inicio de sesión y validación de contraseñas para el personal médico.
            El proyecto integra E/S de archivos, estructuras de datos basadas en diccionarios, manejo de fechas, expresiones regulares y gestión de excepciones para crear un sistema de gestión hospitalaria totalmente funcional.
            Tecnologías: Python, CSV, datetime, re, manejo de excepciones, validación de entradas, programación procedural, CLI basada en menú.`,

    "contact-title": "Contacto",
    "contact-intro": "Para cualquier consulta, no dudes en contactarme:",
    "contact-send-email": "Enviar Email",
    "contact-location": "Madrid, España",
    "contact-email-label": "Correo: davidrubcab@gmail.com",

    "footer-copyright": "© 2026 David Ovidio Rubio Caballero. Todos los derechos reservados.",
  },
};

function getStoredLanguage() {
  return localStorage.getItem("site-lang") || "en";
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  document.documentElement.lang = lang;
  localStorage.setItem("site-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}
