import * as t from '../types'

const initialState = {
  all_tickets: [],
  faq_categories: [],
  faq_category: null,
  archive_tickets: [],
  running_ticket: null,
  current_ticket: null,
  current_support_messages: [],
  all_support_messages_read: false,
}

const supportReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
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
    case t.SET_CURRENT_TICKET_STATUS:
      return {
        ...state,
        current_status: payload,
      }
    case t.CLEAR_CURRENT_TICKET_STATUS:
      return {
        ...state,
        current_status: null,
      }

    case t.GET_FAQ_CATEGORIES_SUCCESS:
      return {
        ...state,
        faq_categories: payload,
      }
    case t.GET_FAQ_CATEGORIES_FAIL:
      return {
        ...state,
        faq_categories: [],
      }

    case t.GET_FAQ_CATEGORY_SUCCESS:
      return {
        ...state,
        faq_category: payload,
      }
    case t.GET_FAQ_CATEGORY_FAIL:
      return {
        ...state,
        faq_category: null,
      }
    case t.GET_ALL_TICKETS_SUCCESS:
      return {
        ...state,
        all_tickets: payload,
        running_ticket: payload.filter(item => item.status !== 3)[0],
        archive_tickets: payload.filter(item => item.status === 3)
      }
    case t.SET_ARCHIVE_TICKET:
      const updateTickets = () => {
        let r_t = state.running_ticket
        let a_t = state.archive_tickets
        r_t.status = 3
        return [r_t, ...a_t]
      }
      return {
        ...state,
        archive_tickets: updateTickets(),
        running_ticket: null,
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

    case t.SET_ALL_SUPPORT_MESSAGES_READ:
      return {
				...state,
				current_support_messages: state.current_support_messages.map((msg) => ({...msg, is_read: true})),
				all_support_messages_read: true,
			}
    case t.SET_ALL_SUPPORT_MESSAGES_UNREAD:
      return {
				...state,
				current_support_messages: state.current_support_messages.map((msg) => ({...msg, is_read: false})),
				all_support_messages_read: false,
			}
    case t.SET_CURRENT_SUPPORT_MESSAGES:
      return {
        ...state,
        current_support_messages: [...state.current_support_messages, payload],
      }
    case t.CLEAR_CURRENT_SUPPORT_MESSAGES:
      return {
        ...state,
        current_support_messages: [],
      }

    default:
      return state
  }
}

export default supportReducer
