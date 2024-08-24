<h3 align="center"><img width="80" alt="Puter.com, Computerul Cloud Personal: Toate fișierele, aplicațiile și jocurile tale într-un singur loc, accesibile de oriunde, oricând." src="https://assets.puter.site/puter-logo.png"></h3>

<h3 align="center">Sistemul de Operare Internet! Gratuit, Open-Source și Găzduibil Autonom.</h3>

<p align="center">
    <img alt="Mărime repo GitHub" src="https://img.shields.io/github/repo-size/HeyPuter/puter"> <img alt="Versiune GitHub Release" src="https://img.shields.io/github/v/release/HeyPuter/puter?label=cea%20mai%20recent%C4%83%20versiune"> <img alt="Licență GitHub" src="https://img.shields.io/github/license/HeyPuter/puter">
</p>
<p align="center">
    <a href="https://puter.com/"><strong>« DEMO LIVE »</strong></a>
    <br />
    <br />
    <a href="https://puter.com">Puter.com</a>
    ·
    <a href="https://docs.puter.com" target="_blank">SDK</a>
    ·
    <a href="https://discord.com/invite/PQcx7Teh8u">Discord</a>
    ·
    <a href="https://www.youtube.com/@EricsPuterVideos">YouTube</a>
    ·
    <a href="https://reddit.com/r/puter">Reddit</a>
    ·
    <a href="https://twitter.com/HeyPuter">X (Twitter)</a>
    ·
    <a href="https://hackerone.com/puter_h1b">Bug Bounty</a>
</p>

<h3 align="center"><img width="800" style="border-radius:5px;" alt="captură de ecran" src="https://assets.puter.site/puter.com-screenshot-3.webp"></h3>

<br/>

## Puter

Puter este un sistem de operare pe internet avansat, open-source, proiectat să fie bogat în funcții, extrem de rapid și foarte extensibil. Puter poate fi folosit ca:

- Un cloud personal axat pe confidențialitate pentru a păstra toate fișierele, aplicațiile și jocurile într-un loc sigur, accesibil de oriunde, oricând.
- O platformă pentru construirea și publicarea de site-uri web, aplicații web și jocuri.
- O alternativă la Dropbox, Google Drive, OneDrive, etc. cu o interfață nouă și caracteristici puternice.
- Un mediu desktop la distanță pentru servere și stații de lucru.
- Un proiect prietenos, open-source și o comunitate pentru a învăța despre dezvoltarea web, cloud computing, sisteme distribuite și multe altele!

<br/>

## Începeți

### 💻 Dezvoltare Locală

```bash
git clone https://github.com/HeyPuter/puter
cd puter
npm install
npm start
```

Acest lucru va lansa Puter la http://puter.localhost:4100 (sau următorul port disponibil).

<br/>

### 🐳 Docker

```bash
mkdir puter && cd puter && mkdir -p puter/config puter/data && sudo chown -R 1000:1000 puter && docker run --rm -p 4100:4100 -v `pwd`/puter/config:/etc/puter -v `pwd`/puter/data:/var/puter  ghcr.io/heyputer/puter
```

<br/>

### 🐙 Docker Compose

### Linux/macOS

```bash
mkdir -p puter/config puter/data
sudo chown -R 1000:1000 puter
wget https://raw.githubusercontent.com/HeyPuter/puter/main/docker-compose.yml
docker compose up
```

<br/>

#### Windows

```powershell

mkdir -p puter
cd puter
New-Item -Path "puter\config" -ItemType Directory -Force
New-Item -Path "puter\data" -ItemType Directory -Force
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/HeyPuter/puter/main/docker-compose.yml" -OutFile "docker-compose.yml"
docker compose up
```

<br/>

### ☁️ Puter.com

Puter este disponibil ca serviciu găzduit la [**puter.com**](https://puter.com).

<br/>

## Cerințe de Sistem

- **Sisteme de Operare:** Linux, macOS, Windows
- **RAM:** 2GB minim (4GB recomandat)
- **Spațiu pe Disk:** 1GB spațiu liber
- **Node.js:** Versiunea 16+ (Versiunea 22+ recomandată)
- **npm:** Ultima versiune stabilă

<br/>

## Sprijin

Conectați-vă cu întreținătorii și comunitatea prin următoarele canale:

- Aveți o problemă sau doriți o funcționalitate nouă? Vă rugăm [să deschideți o problemă](https://github.com/HeyPuter/puter/issues/new/choose).
- Discord: [discord.com/invite/PQcx7Teh8u](https://discord.com/invite/PQcx7Teh8u)
- X (Twitter): [x.com/HeyPuter](https://x.com/HeyPuter)
- Reddit: [reddit.com/r/puter/](https://www.reddit.com/r/puter/)
- Mastodon: [mastodon.social/@puter](https://mastodon.social/@puter)
- Probleme de securitate? [security@puter.com](mailto:security@puter.com)
- Trimiteți un email întreținătorilor la [hi@puter.com](mailto:hi@puter.com)

Suntem bucuroși să vă ajutăm cu orice întrebări aveți. Nu ezitați să ne întrebați!

<br/>

## Licență

Acest depozit, inclusiv toate conținuturile sale, sub-proiectele, modulele și componentele, este licențiat sub [AGPL-3.0](https://github.com/HeyPuter/puter/blob/main/LICENSE.txt), cu excepția cazului în care se menționează altfel în mod explicit. Bibliotecile terțe incluse în acest depozit pot fi supuse propriilor licențe.

<br/>
