import React, { useState } from 'react';
import styles from './UserMessages.module.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { RiReplyLine } from 'react-icons/ri';
import Reply from './Reply';
import { useAuthCtx } from '../../store/authContext';
import { getFormattedDate } from '../../helpers';

const Message = ({ message, setMessages }) => {
	const { subject, text, createdAt } = message;
	const { name, email, number, id } = message.from;
	const [showSenderDetails, setShowSenderDetails] = useState(false);
	const [showTextArea, setShowTextArea] = useState(false);
	const { token } = useAuthCtx().state.user;
	const date = getFormattedDate(createdAt);

	const removeMessage = async () => {
		const url = process.env.REACT_APP_API_URL;
		const resp = await fetch(`${url}/api/user/messages/${message.id}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		setMessages((prev) => prev.filter((msg) => msg.id !== message.id));
		console.log(await resp.json());
	};

	return (
		<div className={styles.Message}>
			<div className={styles.SenderWrapper}>
				<div className={styles.Manage}>
					<div className={styles.Sender}>
						გამომგზავნი
						<AiFillCaretDown onClick={() => setShowSenderDetails((prev) => !prev)} />
					</div>
					<div className={styles.Buttons}>
						<span className={styles.Reply}>
							<RiReplyLine onClick={() => setShowTextArea((prev) => !prev)} />
						</span>
						<span className={styles.Trash}>
							<BsTrash onClick={() => removeMessage()} />
						</span>
					</div>
				</div>

				{showSenderDetails && (
					<div className={styles.Details}>
						<h4>
							<span>სახელი:</span> {name || 'უცნობია'}
						</h4>
						<h4>
							<span>ელ-ფოსტა:</span> {email || 'უცნობია'}
						</h4>
						<h4>
							<span>ტელ-ნომერი:</span> {number || 'უცნობია'}
						</h4>
					</div>
				)}
			</div>
			<h3>{subject}</h3>
			<p className={styles.MessageText}>{text}</p>
			{showTextArea && <Reply senderId={id} setShowTextArea={setShowTextArea} subject={subject} />}
			<p className={styles.MessageDate}>{date}</p>
		</div>
	);
};

export default Message;
