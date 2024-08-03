#### 🛸 SkyWatch: The Global UAP Sightings Database 

#### 🛸👽 SkyWatch is the world's most comprehensive platform for exploring and reporting Unidentified Aerial Phenomena (UAP) sightings. Combining a massive database of over 500,000 reports with cutting-edge AI image generation and powerful semantic search capabilities, SkyWatch lets users dive deep into the mystery of UAPs, uncover hidden patterns, and contribute their own data to the ongoing search for answers.

## 🗣️ Elevator Pitch:

SkyWatch is the world's most comprehensive platform for exploring and reporting Unidentified Aerial Phenomena (UAP) sightings. Combining a massive database of over 500,000 reports with cutting-edge AI image generation, SkyWatch lets users dive deep into the mystery of UAPs, visualize eyewitness accounts, and contribute their own data to the ongoing search for answers.

## 💡 Inspiration

* **Global UAP Interest:** The recent surge in UAP discussions, government hearings (including the US Senate's UAP disclosure amendment), and increased research by organizations like NASA demonstrate a growing public and scientific interest in the phenomenon.
* **Data Accessibility:** Existing UAP data is often scattered, inconsistent, or difficult to access. SkyWatch aims to centralize and standardize this information, making it easily searchable and analyzable.
* **Visualizing the Unknown:** Witness descriptions of UAPs can be subjective and difficult to interpret.  By integrating AI image generation (SDXL 0.9), SkyWatch allows users to visualize these accounts, potentially leading to better understanding and identification. 

## 💻 What it does

SkyWatch is a web app (deployed on Vercel) that offers:

* **UAP Sightings Database:** 500,000+ reports from sources like NUFORC, MUFON, NICAP, government archives, and more, all securely stored and managed on a TiDB Cloud Serverless cluster.
* **Interactive Map:** A 3D globe visually displays sighting locations, with links to detailed reports and Google Maps integration.
* **AI Image Generation:** Users can input sighting details, and the app generates realistic UAP images using SDXL 0.9, enhancing data visualization and analysis.
* **User Reporting:** A user-friendly interface allows for the submission of new sightings, contributing to the growing database.
* **News Aggregation:**  Stay up-to-date on the latest UAP news from around the world with an AI-powered news feed. 

## ⚙️ How we built it:

* **Database:** TiDB Cloud Serverless (v6.6.0, AWS) provides a scalable and reliable database solution.  We leverage **TiDB's Vector Search feature** to enable **fast and accurate semantic similarity searches across our massive dataset of UAP reports**. 
* **Web Application:**  Developed using Vercel, Next.js, JavaScript, CSS, and Node.js. 
* **AI Integration:**  SDXL 0.9 is integrated for on-demand image generation.

## 🛰️ Benefits of TiDB Vector Search for SkyWatch:

* **Semantic Search:**  Finds relevant sightings even if witnesses use different words to describe similar objects or events.
* **Pattern Discovery:**  Uncovers hidden patterns and connections within the data that traditional analysis might miss. 
* **Enhanced User Experience:**  Provides users with more accurate and relevant search results, leading to deeper insights and a better understanding of UAP phenomena.

## 🧠 Challenges we ran into

* **Successfully implemented TiDB Vector Search** to unlock new possibilities for analyzing and understanding UAP data. 
* **Data Aggregation and Cleaning:**  Collecting and standardizing data from diverse sources was time-consuming and required careful data cleaning.
* **AI Model Optimization:**  Fine-tuning SDXL 0.9 to generate accurate and visually compelling UAP representations presented a technical challenge.
* **Scope Management:** Balancing a wide range of features with limited hackathon time required prioritization and efficient development practices. 

## 🏅 Accomplishments that we're proud of

* **Successfully deployed a functional full-stack application** within the hackathon timeframe. 
* **Created a searchable and visually engaging platform** that makes UAP data accessible to a wide audience. 
* **Integrated cutting-edge AI technology** to enhance data visualization and analysis. 

## 📖 What we learned


* **The power of vector search for unstructured data:**  TiDB Vector Search enabled us to perform complex queries on textual descriptions of UAP sightings, something that would be difficult or impossible with traditional keyword-based search. 
* **Full-stack web development** using modern tools and frameworks.
* **Cloud database management** and optimization with TiDB.
* **Practical application of AI** for image generation and data analysis. 

## 🚀 What's Next for SkyWatch

* **Leveraging TiDB Vector Search for advanced analysis:**
    * Identifying clusters of similar sightings based on witness descriptions.
    * Discovering relationships between sighting characteristics and potential explanations. 
    * Building a recommendation engine to connect users with relevant reports and research. 
* **Enhanced User Experience:** Implementing user accounts, data visualization tools, and advanced search filters.
* **Increased Data Volume:**  Expanding the database to include over 1 million reports by integrating data from sources like the Larry Hatch archive and leveraging Amazon S3 for storage. 
* **User-Generated Content:** Allowing users to upload images and videos alongside their reports.
* **Machine Learning Analysis:**  Applying machine learning algorithms to the database to identify patterns, anomalies, and potential explanations for UAP sightings.


