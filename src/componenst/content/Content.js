import './Content.css'

function Content() {
    return (
        <div className="content">
            <div>
                <img src={'https://i.ytimg.com/vi/w8AYmSdaQZI/maxresdefault.jpg'} className="someImage" alt="logo" />
            </div>
            <div>
                ava+description
            </div>
            <div>
                My Posts
            </div>
            <div>
                New Posts
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
                <div>
                    post3
                </div>
                <div>
                    post4
                </div>
            </div>

        </div>
    );
}

export default Content