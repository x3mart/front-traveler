import React, { useEffect } from 'react'
import styles from './Support.module.css'
import { connect } from 'react-redux'
import Messages from './Messages'
import Account from '../../../layouts/account/account'
import { set_all_support_messages_unread } from '../../../redux/actions/supportActions'

const Support = ({ location, set_all_support_messages_unread }) => {
	const { pathname } = location

	useEffect(() => {
		window.scrollTo(0, 0)
		return () => {
			set_all_support_messages_unread()
		}
	}, [])

	return (
		<>
			<Account title="Поддержка" menu_item="support" page={pathname}>
				<div className={styles.chat_wrapper}>
					<Messages />
				</div>
			</Account>
		</>
	)
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
	set_all_support_messages_unread,
}

export default connect(mapStateToProps, mapDispatchToProps)(Support)
