type AsideFriendsType = {
  id: number
  avatar: string
  name: string
}

type AsideStateType = {
  asideFriends: Array<AsideFriendsType>
}

export type InitialStateType = {
  asideState: AsideStateType
}

let initialState: InitialStateType = {
  asideState: {
    asideFriends: [
      {id: 1,
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6Ghz_3vVX362NspWGVByszfbkVlJ77tisTQ&usqp=CAU',
        name: 'Pavel'}, {id: 2,
        avatar: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg',
        name: 'Vika'}, {id: 3,
        avatar: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka1.jpg',
        name: 'Alex'}
    ]
  }
}

const sideBarReducer = (state: InitialStateType = initialState): InitialStateType => {
  return state
}

export default sideBarReducer