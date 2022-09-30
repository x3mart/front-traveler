import * as t from '../types'

const initialState = {
  chat_user: null,
  chat_rooms: [],
  current_room: null,
  all_tickets: [],
  archive_tickets: [],
  running_ticket: null,
  current_ticket: null,
  current_messages: [],
  users_online: [],
  all_messages_read: false,
}

const chatReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.ADD_CHAT_USER:
      return {
        ...state,
        chat_user: payload,
      }
    case t.DELETE_CHAT_USER:
      return {
        ...state,
        chat_user: null,
      }
    case t.GET_CHAT_ROOMS_SUCCESS:
      return {
        ...state,
        chat_rooms: payload,
      }
    case t.UPDATE_CHAT_ROOM:
      return {
        ...state,
        chat_rooms: [payload, ...state.chat_rooms.filter(item => item.id !== payload.id)]
      }
    case t.UPDATE_CHAT_ROOMS:
      return {
        ...state,
        chat_rooms: [payload, ...state.chat_rooms],
      }
    case t.GET_CHAT_ROOMS_FAIL:
    case t.ADD_CHAT_ROOM_FAIL:
      return {
        ...state,
        chat_rooms: null,
      }
    case t.ADD_CHAT_ROOM_SUCCESS:

      return {
        ...state,
        chat_rooms: payload.data,
        // chat_rooms: [payload, ...state.chat_rooms],
        current_room: payload.id,
      }
    case t.SET_CURRENT_ROOM:
      return {
        ...state,
        current_room: payload,
      }
    case t.CLEAR_CURRENT_ROOM:
      return {
        ...state,
        current_room: null,
      }
    case t.SET_CURRENT_TICKET:
      return {
        ...state,
        current_ticket: payload,
      }
    case t.CLEAR_CURRENT_TICKET:
      return {
        ...state,
        current_ticket: null,
      }
    case t.GET_ALL_TICKETS_SUCCESS:
      return {
        ...state,
        all_tickets: payload,
        running_ticket: payload.filter(item => item.status !== 3),
        archive_tickets: payload.filter(item => item.status === 3)
      }
    case t.GET_ALL_TICKETS_FAIL:
      return {
        ...state,
        all_tickets: [],
      }
    case t.SET_NEW_TICKET_SUCCESS:
      return {
        ...state,
        running_ticket: payload,
        all_tickets: [payload, ...state.all_tickets],
      }
    case t.SET_NEW_TICKET_FAIL:
      return {
        ...state,
        running_ticket: null,
      }
    case t.SET_ALL_MESSAGES_READ:
      return {
        ...state,
        current_messages: state.current_messages.map(item => {
          item.is_read = true
          return item
        }),
        // all_messages_read: true,
      }
    case t.SET_ALL_MESSAGES_UNREAD:
      return {
        ...state,
        all_messages_read: false,
      }
    case t.SET_CURRENT_MESSAGES:
      return {
        ...state,
        current_messages: [...state.current_messages, payload],
      }
    case t.CLEAR_CURRENT_MESSAGES:
      return {
        ...state,
        current_messages: [],
      }
    case t.SET_USERS_ONLINE:
      const setUserOnline = (users, user) => {
        if(users.includes(user)) {
          return users
        } else {
          return [...users, user]
        }
    }
      return {
        ...state,
        users_online: setUserOnline(state.users_online, payload),
      }
    case t.SET_USERS_OFFLINE:
      const setUserOffline = (users, user) => {
        return users?.filter(item => item !== user)
      }
      return {
        ...state,
        users_online: setUserOffline(state.users_online, payload),
      }
    case t.CLEAR_ALL_NOTIFICATIONS:
      return {
        ...state,
        users_online: [],
      }
    default:
      return state
  }
}

export default chatReducer
