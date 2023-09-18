import { useState, useCallback, useEffect, RefObject } from 'react';
import styled from 'styled-components';
import DatePicker, { DatePickerProps, DayRange, DayValue, RenderInputProps, utils } from '@hassanmojab/react-modern-calendar-datepicker';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import '../styles.css';

interface IInputProps extends DatePickerProps<DayRange | DayValue> {
	type: 'DayValue' | 'DayRange';
	selectedDay: DayValue;
	selectedDayRange: DayRange;
}

const InputC = (props: IInputProps) => {
	const { type, selectedDayRange, selectedDay, ...otherProps } = props;
	return type === 'DayRange' ? (
		<DatePicker
			{...otherProps}
			value={selectedDayRange}
		/>
	) : (
		<DatePicker
			{...otherProps}
			value={selectedDay}
		/>
	);
};

interface IDayValue {
	initValue?: DayValue;
	onChange?: (date: DayValue) => void;
	fetchData?: (date: DayValue) => Promise<void>;
}

interface IDayRange {
	initValue?: DayRange;
	onChange?: (date: DayRange) => void;
	fetchData?: (date: DayRange) => Promise<void>;
}

interface DatepickerProps {
	id?: string;
	containerClassName?: string;
	labelClassName?: string;
	today?: boolean;
	inputClassName?: string;
	inputLabel?: string;
	inputPlaceholder?: string;
	colorPrimary?: string;
	colorPrimaryLight?: string;
	formatInputText?: () => '';
	renderInput?: (props: RenderInputProps) => null;
}

export interface IDayRangeProps extends DatepickerProps, IDayRange {
	type: 'DayRange';
}

export interface IDayValueProps extends DatepickerProps, IDayValue {
	type: 'DayValue';
}

const DateInputC = (props: IDayRangeProps | IDayValueProps) => {
	const {
		id,
		initValue,
		containerClassName,
		labelClassName,
		inputClassName,
		inputLabel,
		inputPlaceholder,
		colorPrimary,
		colorPrimaryLight,
		formatInputText,
		renderInput,
		type,
		onChange,
		fetchData,
		today,
		...otherProps
	} = props;
	const [focus, setFocus] = useState<boolean>(false);
	const [selectedDay, setSelectedDay] = useState<DayValue>(!!today ? utils('fa').getToday() : null);
	const [selectedDayRange, setSelectedDayRange] = useState<DayRange>(
		!!today ? { from: utils('fa').getToday(), to: utils('fa').getToday() } : { from: null, to: null }
	);

	useEffect(() => {
		if (!!today && !!fetchData) {
			const todayDate = utils('fa').getToday();
			type === 'DayRange' ? fetchData({ from: todayDate, to: todayDate }) : fetchData(todayDate);
		}
	}, []);

	useEffect(() => {
		if (!!initValue) {
			type === 'DayRange' ? setSelectedDayRange(initValue) : setSelectedDay(initValue);
		}
	}, [initValue]);

	const formatInputValue = useCallback(() => {
		if (type === 'DayRange') {
			if (!selectedDayRange.from || !selectedDayRange.to) return '';
			return `${selectedDayRange.from.year}/${selectedDayRange.from.month}/${selectedDayRange.from.day} - ${selectedDayRange.to.year}/${selectedDayRange.to.month}/${selectedDayRange.to.day}`;
		} else {
			if (!selectedDay) return '';
			return `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`;
		}
	}, [selectedDayRange, selectedDay]);

	const handleClick = () => {
		setSelectedDay(null);
		setSelectedDayRange({ from: null, to: null });
		if (type === 'DayRange') {
			!!onChange && onChange({ from: null, to: null });
		} else {
			!!onChange && onChange(null);
		}
	};

	const handleChange = (value: DayRange | DayValue) => {
		if (type === 'DayRange') {
			setSelectedDayRange(value as DayRange);
			!!onChange && onChange(value as DayRange);
		} else {
			setSelectedDay(value as DayValue);
			!!onChange && onChange(value as DayValue);
		}
	};

	return (
		<div
			className="search"
			{...otherProps}
		>
			<div
				className={`datepicker input-container ${containerClassName} ${
					(!!selectedDayRange.from && !!selectedDayRange.to) || !!selectedDay || focus ? 'has-value' : ''
				}`}
			>
				<label
					htmlFor={!!id ? id : "datepicker-input"}
					className={`datepicker-label label user-select-none ${labelClassName}`}
				>
					{!!inputLabel ? inputLabel : 'تاریخ'}
				</label>
				<InputC
					value={null}
					type={type}
					selectedDay={selectedDay}
					selectedDayRange={selectedDayRange}
					onChange={handleChange}
					renderInput={(props) =>
						!!renderInput ? (
							renderInput(props)
						) : (
							<input
								readOnly
								id={!!id ? id : "datepicker-input"}
								className={`datepicker-input ${inputClassName}`}
								placeholder={inputPlaceholder}
								value={!!formatInputText ? formatInputText() : formatInputValue()}
								ref={props.ref as RefObject<HTMLInputElement>}
								onFocus={() => {
									setFocus(true);
								}}
								onBlur={() => {
									setFocus(false);
								}}
							/>
						)
					}
					inputClassName={`datepicker-input ${inputClassName}`}
					inputPlaceholder={!!inputPlaceholder ? inputPlaceholder : 'بازه زمانی'}
					shouldHighlightWeekends
					colorPrimary={!!colorPrimary ? colorPrimary : '#234A90'}
					formatInputText={!!formatInputText ? formatInputText : formatInputValue}
					colorPrimaryLight={!!colorPrimaryLight ? colorPrimaryLight : '#234a9040'}
					locale="fa"
				/>
				{(!!selectedDayRange.from && !!selectedDayRange.to) || !!selectedDay ? (
					<span
						className="datepicker-icon clear-icon"
						onClick={handleClick}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="#c9cacc"
						>
							<title>close-circle</title>
							<path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
						</svg>
					</span>
				) : (
					<label
						htmlFor={!!id ? id : "datepicker-input"}
						className="datepicker-icon-label"
					>
						<span className="datepicker-icon">
							<svg
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M19.3438 4.66992H18.3438V2.66992H16.3438V4.66992H8.34375V2.66992H6.34375V4.66992H5.34375C4.23375 4.66992 3.34375 5.56992 3.34375 6.66992V20.6699C3.34375 21.7699 4.23375 22.6699 5.34375 22.6699H19.3438C20.4438 22.6699 21.3438 21.7699 21.3438 20.6699V6.66992C21.3438 5.56992 20.4438 4.66992 19.3438 4.66992ZM19.3438 20.6699H5.34375V9.66992H19.3438V20.6699ZM6.84375 13.6699C6.84375 12.2899 7.96375 11.1699 9.34375 11.1699C10.7238 11.1699 11.8438 12.2899 11.8438 13.6699C11.8438 15.0499 10.7238 16.1699 9.34375 16.1699C7.96375 16.1699 6.84375 15.0499 6.84375 13.6699Z"
									fill="#49454F"
								/>
							</svg>
						</span>
					</label>
				)}
			</div>
		</div>
	);
};

export const DateInput = styled(DateInputC)`
  display: flex;
	gap: 24px;
	align-items: center;
	.datepicker {
    display: flex;
    position: relative;
    z-index: 999;
    &::after {
      width: 33px;
      opacity: 0;
      content: '';
      position: absolute;
      right: 12px;
      top: 0;
      height: 1px;
      background: #f7f8fa;
      z-index: 101;
      transition: 0.3s;
    }
    .datepicker-icon-label {
      cursor: pointer;
      top: unset;
      right: unset;
      display: flex;
      transition: 0.3s;
      background: transparent;
    }
    .label {
      position: absolute;
      top: 50%;
      cursor: pointer;
      right: 12px;
      transform: translateY(-50%);
      font-size: 12px;
      padding: 0 4px;
      z-index: 102;
      transition: 0.3s;
      color: black;
      background: transparent;
    }
    .datepicker-input {
      padding: 13px 16px 12px 48px;
      border: 1px solid #79747e;
      border-radius: 4px;
      direction: rtl;
      text-align: right;
      background: transparent;
      outline: none;
      font-size: 14px;
      &:focus-within {
        border-color: black;
      }
    }
    .datepicker-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 101;
      display: flex;
      &.clear-icon {
        cursor: pointer;
        left: 14px;
        width: 20px;
        height: 20px;
        z-index: 102;
        > svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    &.has-value {
      &:after {
        opacity: 1;
      }
      .label {
        top: 0;
      }
      .select-container {
        z-index: unset;
      }
    }
	}
`;
