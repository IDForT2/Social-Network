import classes from "./Users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                    isFollowed: true,
                    fullName: 'Sashko',
                    status: 'Hello World!',
                    location: {city: 'Lviv', country: "Ukraine"}
                },
                {
                    id: 2,
                    photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                    isFollowed: false,
                    fullName: 'Danylo',
                    status: 'Bye World!',
                    location: {city: 'Kyiv', country: "Ukraine"}
                },
                {
                    id: 3,
                    photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                    isFollowed: true,
                    fullName: 'Mikita',
                    status: 'ASAP!',
                    location: {city: 'Sevastopol', country: "Ukraine"}
                },
                {
                    id: 4,
                    photoUrl: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
                    isFollowed: false,
                    fullName: 'Vladislav',
                    status: 'Yo',
                    location: {city: 'Rozhnyativ', country: "Ukraine"}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={classes.usersPhoto}/>
                    </div>
                    <div>
                        {u.isFollowed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users