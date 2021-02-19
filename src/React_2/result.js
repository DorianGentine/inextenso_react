export default function Result(props) {
  const item = props.item
  const index = props.index

  return (
    <a href={item.html_url} target="_blank" key={index} className="result-card">
      <div className="avatar" style={{backgroundImage: `url(${item.avatar_url})`}}></div>
      <p>{item.login}</p>
    </a>
  )
}

