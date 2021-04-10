import { useState, useEffect } from 'react'
import { db } from '../config'
import moment from 'moment'

function Home(props) {
  const [content, setContent] = useState("")
  const [chat, setChat] = useState([])

  const getListChat = async () => {
    const fetchDB = await db.ref("chat")
    fetchDB.on("value", (snapshot) => {
      const value = snapshot.val()
      const listChat = Object.values(value)
      setChat([...chat, ...listChat])
    })
  }

  const saveChat = ({ keyCode }) => {
    if (keyCode === 13) {
      const data = {
        uid: props.identifier,
        content,
        timestamp: Date.now()
      }

      try {
        setChat([...chat, data])
        setContent("")
        return db.ref("chat").push(data)
      }
      catch (err) {

      }
    }
  }

  useEffect(() => {
    getListChat()
       // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [])

  return (
    <div className="page-content page-container" id="page-content">
      <p className="text-center">
        Template by :
        https://bbbootstrap.com/snippets/simple-chat-application-57631463
      </p>
      <div className="padding">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card card-bordered">
              <div className="card-header">
                <h4 className="card-title">
                  <strong>Chat</strong>
                </h4>{' '}
                {/* eslint-disable-next-line */}
                <a className="btn btn-xs btn-secondary" to="/" data-abc="true">
                  Let's Chat App
                </a>
              </div>
              <div
                className="ps-container ps-theme-default ps-active-y"
                id="chat-content"
                style={{
                  overflowY: 'scroll !important',
                  height: '400px !important',
                }}
              >
                {
                  (chat || []).map((item, index) => {
                    if (item.uid === props.identifier) {
                      return (<div key={index} className="media media-chat media-chat-reverse">
                        <div className="media-body">
                          <p>{item.content}</p>
                          <p className="meta">
                            <span className="text-secondary">{moment(item.timestamp).format("hh:mm")}</span>
                          </p>
                        </div>
                      </div>)
                    }
                    else {
                      return (<div key={index} className="media media-chat">
                        {' '}
                        <img
                          className="avatar"
                          src="https://img.icons8.com/color/36/000000/administrator-male.png"
                          alt="..."
                        />
                        <div className="media-body">
                          <p>{item.content}</p>
                          <p className="meta">
                            <span className="text-secondary">{moment(item.timestamp).format("hh:mm")}</span>
                          </p>
                        </div>
                      </div>)
                    }
                  })
                }
                <div
                  className="ps-scrollbar-x-rail"
                  style={{ left: '0px', bottom: '0px' }}
                >
                  <div
                    className="ps-scrollbar-x"
                    tabindex="0"
                    style={{ left: '0px', bottom: '0px' }}
                  ></div>
                </div>
                <div
                  className="ps-scrollbar-y-rail"
                  style={{ left: '0px', right: '2px' }}
                >
                  <div
                    className="ps-scrollbar-y"
                    tabindex="0"
                    style={{ left: '0px', height: '2px' }}
                  ></div>
                </div>
              </div>
              <div className="publisher bt-1 border-light">
                {' '}
                <img
                  className="avatar avatar-xs"
                  src="https://img.icons8.com/color/36/000000/administrator-male.png"
                  alt="..."
                />{' '}
                <input
                  className="publisher-input"
                  type="text"
                  placeholder="Tuliskan Sesuatu"
                  onChange={({ target }) => setContent(target.value)}
                  onKeyDown={saveChat}
                  value={content}
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
