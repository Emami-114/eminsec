import { ArrowUpRight, Play } from 'lucide-react'

type Video = {
  id: string
  title: string
  topic: string
  duration: string
}

const featured: Video = {
  id: '7UF8hLl58BA',
  title: 'Python Port Scanner From Scratch — No Nmap, Just Sockets',
  topic: 'Python · Network Recon',
  duration: '13:28',
}

const videos: Video[] = [
  { id: '4zB41fanbnE', title: 'Python Pentesting: Write a Recon Tool from Scratch', topic: 'Subdomain · Directory Enumeration', duration: '09:16' },
  { id: 'XoJhEa2CKTo', title: 'NetExec — From Zero to Domain Admin', topic: 'Active Directory Pentest', duration: '13:35' },
]

function VideoLog({ video }: { video: Video }) {
  return (
    <a className="video-log" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer">
      <img src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
      <div><span>{video.topic}</span><h3>{video.title}</h3><p>{video.duration} · Watch on YouTube</p></div>
      <ArrowUpRight aria-hidden="true" />
    </a>
  )
}

export function Videos() {
  return (
    <section className="videos" id="videos">
      <div className="video-heading">
        <span className="section-kicker">Pentesting Videos / 03</span>
        <h2>Exploit. Explain.<br />Defend.</h2>
        <p>Auf SolderXploit zerlege ich Pentesting-Techniken Schritt für Schritt — reproduzierbar, praxisnah und ausschließlich für autorisierte Umgebungen.</p>
      </div>
      <div className="video-layout">
        <div className="featured-video">
          <div className="video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${featured.id}`} title={featured.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
          <div><span>{featured.topic}</span><h3>{featured.title}</h3><p>{featured.duration} · Educational use only</p></div>
        </div>
        <div className="video-log-list">
          {videos.map((video) => <VideoLog video={video} key={video.id} />)}
          <a className="channel-link" href="https://www.youtube.com/@SolderXploit" target="_blank" rel="noreferrer"><Play /> SolderXploit abonnieren <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  )
}

