
#### You can download or clone it to run it locally in your system etc. You can find the link below in our "Try it out" links etc.

To run the SKYWATCH_UAP_SIGTHINGS project locally, follow these steps:

1. **Clone the Repository**: Open your terminal and run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/MiChaelinzo/SKYWATCH_UAP_SIGTHINGS.git
   ```

2. **Navigate to the Project Directory**: Change to the project directory using the `cd` command:
   ```bash
   cd SKYWATCH_UAP_SIGTHINGS
   ```

3. **Install Dependencies**: Depending on the project's requirements, you may need to install dependencies. Check the `README.md` file for specific instructions. Common commands include:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. **Set Up Environment Variables**: If the project requires environment variables, create a `.env` file in the root directory and add the necessary variables. Refer to the `README.md` or any configuration files for details.

5. **Start the Development Server**: Run the development server using the appropriate command. This is usually specified in the `package.json` file under the `scripts` section. Common commands include:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

6. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` (or the specified port) to view the application.

For more detailed instructions, refer to the [project's README file](https://github.com/MiChaelinzo/SKYWATCH_UAP_SIGTHINGS).

## Inspiration 🌌✨

* The ongoing global interest in Unidentified Aerial Phenomena (UAP) and the need for more transparent and data-driven investigations. 🔎
* The potential of cutting-edge AI, specifically NVIDIA's powerful language models, to analyze complex data and identify patterns humans might miss. 🤖🧠
* Empowering a global community of citizen scientists and researchers to contribute to UAP understanding through a collaborative platform. 🧑‍🤝‍🧑🌍
* The desire to bring greater transparency and scientific rigor to the investigation of UAPs. 🔬🔭
* The potential of AI and machine learning to unlock patterns and insights hidden in vast amounts of UAP data. 📊💡
* The need for a user-friendly platform that empowers both the public and researchers to contribute to UAP understanding. 🤝🧑‍💻👩‍🔬
* The excitement of pushing the boundaries of AI and its application in a unique and impactful domain. 🚀🌠

### **Advanced AI & Local Deployment**  🤖🧠💻
* **Meta Llama-3.2B & Microsoft Phi-3.5-MOE Integration** 🤖🧠:
  - We deployed state-of-the-art models locally via [Genie AI Hub](https://github.com/quic/ai-hub-apps/tree/main/tutorials/llm_on_genie) and NPM packages for offline, low-latency analysis of UAP data.  📦
  - Optimize hybrid workflows where lightweight models (Phi-3.5) run on edge devices, while larger models (Llama-3.2B) handle cloud-based pattern recognition.  ☁️

## What it does 🤖✨

* **Streamlined Reporting:** Provides a user-friendly web application 🌐 and mobile app 📱 for submitting detailed UAP sighting reports, capturing crucial information for analysis. 📝
* **Real-Time AI Analysis:**  Utilizes NVIDIA's advanced language models (accessed via the `https://integrate.api.nvidia.com/v1` endpoint) to provide:
    * **Natural Language Interaction:**  A conversational AI chatbot 💬🤖 that guides users through the reporting process and answers questions about UAPs. 🤔
    * **On-the-Fly Analysis:**  Preliminary analysis of sighting reports, highlighting potential anomalies or correlations with other reports. 🔍📊
* **Machine Learning Insights:** Leverages custom-trained machine learning models to:
    * **Identify Trends:**  Uncover patterns in sighting locations, times, object characteristics, and witness descriptions. 📈🗺️
    * **Detect Anomalies:**  Flag unusual sightings that deviate significantly from established patterns. 🚨👽
* **Open Data and Collaboration:** Promotes data transparency and collaboration by:
    * **Making anonymized data available to researchers:**  Accelerating scientific inquiry into UAP phenomena. 🧑‍🔬👩‍💻
    * **Enabling user discussions and community-driven investigations:** Fostering a collective effort to understand the unknown. 🤝🌍

### **Multi-Sensor Fusion & Defense Integration** 🛰️🚢🛡️
* **Sea Vessel Threat Monitoring** 🌊⚓:
  - Partner with maritime startups to integrate Radar, Lidar, and Acoustic Sensors for detecting UAPs **and** local threats (e.g., drones, submarines).  🤝🚢
  - Deploy **IDS (Intrusion Detection Systems)** to flag anomalous signals in real-time, correlating with global UAP databases.  🚨📡
* **Drone Swarm Analysis** 🚁🔍:
  - Use NVIDIA cuGraph to map UAP movement patterns against known drone swarm tactics for threat classification.  🗺️🚁

### **Immersive Reporting & Collaboration Tools** 🎥🎤✨
* **Field Investigator Toolkit** 📱✨:
  - **Audio Message Analysis**: AI-powered voice-to-text transcription with emotion/sentiment detection for witness interviews.  🎤🗣️
  - **Screen Sharing & Video Chat**: Enable remote experts to guide on-site users via live video feeds (local preview + encrypted streaming).  🎥🤝
* **AR Overlay Mode** 👓🌐:
  - Visualize UAP flight paths over real-time camera feeds using device GPS and gyroscope data.  🗺️📍

### **GraphRAG & Knowledge Networks** 📊🔗🧩
* **NVIDIA cuGraph-Powered Analysis** 🧩:
  - Build dynamic knowledge graphs linking UAP sightings to weather data, satellite imagery, and historical reports using **GraphRAG**.  🔗📊
  - Detect hidden connections (e.g., sightings near nuclear facilities or flight corridors).  🔍☢️

## How we built it 🧑🏻‍💻🛠️

* **Intuitive Interfaces:** Designed user-friendly web 🌐 and mobile app 📱 interfaces using modern development frameworks (e.g., React, React Native, Next.js, Vercel).
* **Qualcomm® AI:**  Seamlessly integrated Qualcomm® AI Hub to power the AI chatbot 🤖 and natural language processing functions, enabling a conversational and intuitive user experience.
* **Machine Learning Pipeline:** Developed and trained custom machine learning models on a curated dataset of UAP reports, using techniques like clustering, anomaly detection, and natural language processing. ⚙️🧠
* **Scalable Architecture:**  Built a robust and scalable cloud infrastructure ☁️ (e.g., using AWS, Google Cloud, or Azure) to handle growing user traffic, data storage, and computationally intensive AI tasks.
* **Privacy and Security:** Implemented strict data security and privacy measures to protect user information and ensure compliance with relevant regulations. 🔒🛡️
* Developed a user-friendly web interface 🌐 and mobile app 📱 for seamless UAP reporting.
* Integrated Qualcomm® AI Hub to power the AI chatbot 🤖 and natural language processing capabilities.
* Implemented machine learning models for data analysis and pattern recognition. 📊
* Designed a scalable cloud architecture ☁️ to handle growing volumes of data and user interactions.
* Ensured robust data security and privacy measures to protect user information. 🛡️🔒

## Challenges we ran into 🚧🤔

* **Optimizing AI Performance:** Fine-tuning Qualcomm® AI Hub  and machine learning algorithms to handle the specific nuances and complexities of UAP data. ⚙️🤖
* **Data Acquisition and Quality:**  Gathering, cleaning, and standardizing a large and reliable dataset of UAP reports from various sources. 🗂️🧹
* **Balancing User Experience and Scientific Rigor:**  Creating a platform that is both engaging for casual users and robust enough for serious research. ⚖️🧑‍🔬
* Integrating and optimizing the NVIDIA API for seamless performance. ⚙️
* Acquiring and cleaning large datasets of UAP sighting reports. 🗂️🧹
* Developing machine learning models that can effectively handle the complexity and variability of UAP data. 🤖🧠
* Balancing the need for user-friendly interaction with the rigor of scientific analysis. ⚖️🔬

## Accomplishments that we're proud of 🏆🎉

* **First-of-Its-Kind Platform:**  Successfully developed a unique platform that combines user-friendly reporting, real-time AI analysis, and open data sharing for UAP investigation. 🥇🚀
* **Cutting-Edge AI Integration:** Leveraged NVIDIA's powerful AI capabilities to create a truly interactive and insightful experience. 🤖🧠✨
* **Community Empowerment:** Built a platform that enables anyone to contribute to UAP research, potentially leading to new discoveries and a better understanding of these phenomena. 🧑‍🤝‍🧑🌍🌟
* Successfully creating a functional AI-powered UAP reporting and analysis platform. ✅
* Leveraging cutting-edge AI technology to provide real-time insights and analysis. 🤖💡
* Empowering both the public and researchers to contribute to UAP understanding. 🧑‍🤝‍🧑
* Potentially paving the way for new discoveries and breakthroughs in the field of UAP research. 🚀🔭

## What we learned 🎓💡

* The importance of a multidisciplinary approach, combining AI expertise, data science, and user interface design. 🧑‍💻📊🎨
* The challenges and potential rewards of applying AI in a field as complex and ambiguous as UAP studies. 🤔🌟
* The significance of community involvement and open data sharing for advancing scientific progress. 🧑‍🤝‍🧑🌍
* The importance of clear communication and collaboration in developing complex AI systems. 🗣️🤝
* The power of AI and machine learning to unlock insights from large and diverse datasets. 🤖📊🔑
* The challenges and rewards of applying AI in a novel and impactful domain. 🚀🌟
* The value of open data sharing and community-driven research in advancing scientific understanding. 🌍🧑‍🔬

## What's next for SKYWATCH Sentinel: The AI UAP Investigator 🚀🔭

* **Expand Data Sources:** Incorporate additional data, such as radar readings 📡, satellite imagery 🛰️, and sensor data, to provide a more comprehensive view of UAP events.
* **Advanced Predictive Modeling:**  Develop AI models capable of predicting potential UAP hotspots or correlating sightings with specific events or conditions. 🤖🔮
* **Interactive Visualizations:** Create engaging and informative visualizations to help users explore patterns, trends, and anomalies in the UAP data. 📊📈🗺️
* **Global Collaboration:**  Foster partnerships with research institutions 🏛️, government agencies, and international UAP organizations to share data and advance scientific understanding. 🤝🌍
* Incorporating additional data sources such as radar 📡, satellite imagery 🛰️, and sensor data.
* Enhancing the AI's capabilities for anomaly detection and predictive modeling. 🤖🔮
* Expanding the platform's features to include interactive visualizations and collaborative analysis tools. 📊🤝
* Partnering with research institutions and organizations to further validate and expand the project's impact. 🏛️🌍

### **Global Sensor Grid & Open Science** 🌍🔬📡
* **Citizen Scientist Network** 📡👩🔬:
  - Distribute low-cost sensor kits (RF, thermal, magnetic) to volunteers for crowd-sourced data collection.  📦👩‍🔬
  - Reward contributors with **NFT-based badges** 🏅 for verified reports.  🏆
* **Research Consortium Partnerships** 🤝🏛️:
  - Share anonymized datasets with institutions like SETI or CERN to cross-validate findings using astrophysics models.  🤝🔭

### **Defense & Policy Integration** 🛡️📜🚨
* **Automated NORAD Alerts** 🚨✈️:
  - Develop APIs to flag high-confidence UAP events near airspace for aviation authorities.  🚨✈️👮‍♂️
* **Policy Advisor AI** 💼🤖:
  - Train models to generate risk assessment reports for policymakers using historical incident data.  💼🤖📜

### This roadmap combines cutting-edge AI 🤖, sensor fusion 📡, and community-driven science 🧑‍🔬 to turn UAP research into a scalable, actionable toolkit for science **and** security! 🌠🔐✨

### To Use the Updated API Endpoints:

- 1. Replace the contents of your API endpoint files in pages/api/ with these updated versions.

- 2. Install formidable: If you didn't already, run npm install formidable or yarn add formidable in your project directory (important for pages/api/audio.js).

- 3. Run your Next.js development server (npm run dev or yarn dev).


### 🛸🚀 SkyWatch: The Global UAP Sightings Database 

###### 🛸🌠👽 SkyWatch is the world's most comprehensive platform for exploring and reporting Unidentified Aerial Phenomena (UAP) sightings. Combining a massive database of over 500,000 reports with cutting-edge AI image generation and powerful semantic search capabilities, SkyWatch lets users dive deep into the mystery of UAPs, uncover hidden patterns, and contribute their own data to the ongoing search for answers.

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
![Alt text](https://i.imgur.com/je3HQZ6.png)
## ⚙️ How we built it:

* **Database:** TiDB Cloud Serverless (v6.6.0, AWS) provides a scalable and reliable database solution.  We leverage **TiDB's Vector Search feature** to enable **fast and accurate semantic similarity searches across our massive dataset of UAP reports**. 
![Alt text](https://i.imgur.com/U0uldXe.png)
* **Web Application:**  Developed using Vercel, Next.js, JavaScript, CSS, HTML, and Node.js. 
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
![Alt text](https://i.imgur.com/AbFbohh.png)
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

## Disclaimer 📄

SkyWatch is a fascinating project that compiles and visualizes a vast amount of data on reported UAP sightings. While it provides a valuable tool for exploring these intriguing phenomena, it's important to remember that **SkyWatch does not, and cannot, definitively prove or disprove the existence of extraterrestrial life.**

The database captures subjective eyewitness accounts, which can be influenced by a variety of factors:  misidentification of known objects, atmospheric conditions, limitations of human perception, and even hoaxes.  Many reported UAPs can likely be attributed to more mundane explanations, such as:

* **Commercial or military aircraft:**  Unfamiliar aircraft or unusual flight paths can easily be misconstrued. 
* **Satellites and space debris:**  Reflecting sunlight can create unexpected visual effects, especially at night.
* **Drones:**  The increasing prevalence of drones, both commercial and private, adds to the complexity of airspace. 
* **Weather phenomena:**  Unusual cloud formations, atmospheric distortions, or even meteorological balloons can create perplexing sightings. 

SkyWatch's strength lies in its ability to organize and analyze this data, potentially revealing patterns or anomalies that warrant further investigation. However, **correlation does not equal causation.** Even if patterns emerge, they might point to human activities, natural phenomena, or as-yet-undiscovered aspects of our own world. 

Ultimately, SkyWatch provides a valuable resource for UAP research, but **the question of extraterrestrial life requires rigorous scientific inquiry, careful analysis, and extraordinary evidence.**  SkyWatch is a step in the right direction, but the journey to understanding UAPs is far from over. 

