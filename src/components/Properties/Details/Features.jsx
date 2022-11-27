import React from 'react';
import styles from './Property.module.scss';
import { TbFlame, TbArmchair, TbRouter } from 'react-icons/tb';
import { FiWind } from 'react-icons/fi';
import { GiCellarBarrels, GiRotaryPhone, GiHomeGarage, GiTvRemote } from 'react-icons/gi';
import { BsDoorClosed } from 'react-icons/bs';
import { IoWaterOutline } from 'react-icons/io5';
import { CgSmartHomeWashMachine, CgSmartHomeBoiler } from 'react-icons/cg';
import { TfiSignal } from 'react-icons/tfi';
import { IoMdTv } from 'react-icons/io';
import { MdCheckroom, MdBalcony } from 'react-icons/md';
import { RiFridgeLine } from 'react-icons/ri';

const Features = () => {
	const offStyles = {
		textDecoration: 'line-through',
		color: '#c3c3c3',
	};

	const {
		naturalGas,
		IronDoor,
		hotWater,
		ac,
		telephone,
		washingMachine,
		basement,
		garage,
		furniture,
		alarm,
		tv,
		cableTv,
		internet,
		closet,
		balcony,
		fridge,
		centralHeating,
	} = {
		naturalGas: true,
		IronDoor: true,
		hotWater: true,
		ac: true,
		telephone: false,
		washingMachine: true,
		basement: true,
		garage: false,
		furniture: true,
		alarm: false,
		tv: true,
		cableTv: true,
		internet: true,
		closet: true,
		balcony: true,
		fridge: true,
		centralHeating: true,
	};

	return (
		<div className={styles.Features}>
			<h3>კეთილმოწყობა</h3>
			<ul>
				<li style={naturalGas ? {} : offStyles}>
					<TbFlame /> ბუნებრივი აირი
				</li>
				<li style={IronDoor ? {} : offStyles}>
					<BsDoorClosed />
					რკინის კარი
				</li>
				<li style={hotWater ? {} : offStyles}>
					<IoWaterOutline />
					ცხელი წყალი
				</li>
				<li style={ac ? {} : offStyles}>
					<FiWind />
					კონდიციონერი
				</li>
				<li style={telephone ? {} : offStyles}>
					<GiRotaryPhone />
					ტელეფონი
				</li>
				<li style={washingMachine ? {} : offStyles}>
					<CgSmartHomeWashMachine />
					სარეცხი მანქანა
				</li>
				<li style={basement ? {} : offStyles}>
					<GiCellarBarrels />
					სარდაფი
				</li>
				<li style={garage ? {} : offStyles}>
					<GiHomeGarage />
					ავტოფარეხი
				</li>
				<li style={furniture ? {} : offStyles}>
					<TbArmchair />
					ავეჯი
				</li>
				<li style={alarm ? {} : offStyles}>
					<TfiSignal />
					სიგნალიზაცია
				</li>
				<li style={tv ? {} : offStyles}>
					<IoMdTv />
					ტელევიზორი
				</li>
				<li style={cableTv ? {} : offStyles}>
					<GiTvRemote />
					საკაბელო ტელევიზია
				</li>
				<li style={internet ? {} : offStyles}>
					<TbRouter />
					ინტერნეტი
				</li>
				<li style={closet ? {} : offStyles}>
					<MdCheckroom />
					სათავსო
				</li>
				<li style={balcony ? {} : offStyles}>
					<MdBalcony /> აივანი
				</li>
				<li style={fridge ? {} : offStyles}>
					<RiFridgeLine />
					მაცივარი
				</li>
				<li style={centralHeating ? {} : offStyles}>
					<CgSmartHomeBoiler />
					ცენტრალური გათბობა
				</li>
			</ul>
		</div>
	);
};

export default Features;
