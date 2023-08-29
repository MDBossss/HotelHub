import React, { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosCalendar } from "react-icons/io";
import { DateRange, Range } from "react-date-range";
import useClickOutside from "../../hooks/useClickOutside";
import { SearchFilters } from "../../types/model";

interface Props {
	showCalendar: boolean;
	handleSearch: (searchFilters: SearchFilters) => void;
}

const SearchBar = ({ showCalendar, handleSearch }: Props) => {
	const datePickerRef = useRef<HTMLDivElement>(null);
	const [showDateRange, setShowDateRange] = useState<boolean>(false);
	const [destination, setDestination] = useState<string | null>(null);

	const [dateRange, setDateRange] = useState<Range[]>([
		{
			startDate: undefined,
			endDate: undefined,
			key: "selection",
		},
	]);

	const handleToggleDateRange = (event: React.MouseEvent<HTMLParagraphElement>) => {
		event.stopPropagation();
		setShowDateRange(!showDateRange);
	};

	useClickOutside(datePickerRef, () => {
		setShowDateRange(false);
	});

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			searchClicked();
		}
	};

	const searchClicked = () => {
		handleSearch({
			destination: destination,
			date: {
				startDate: dateRange[0].startDate,
				endDate: dateRange[0].endDate,
			},
		});
	};

	return (
		<div className="search">
			<div className="inputs">
				<div className="destination-wrapper">
					<div className="location">
						<HiOutlineLocationMarker />
					</div>
					<input
						type="text"
						placeholder="Search Destination"
						style={{ borderRadius: showCalendar ? "" : "32px" }}
						onChange={(e) => setDestination(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
				</div>
				{showCalendar && (
					<div className="dp-wrapper">
						<div className="calendar">
							<IoIosCalendar />
						</div>
						<p className="date" onClick={handleToggleDateRange}>
							{dateRange[0].startDate?.toLocaleDateString("hr-HR", {
								day: "2-digit",
								month: "2-digit",
							})}{" "}
							-{" "}
							{dateRange[0].endDate?.toLocaleDateString("hr-HR", {
								day: "2-digit",
								month: "2-digit",
							})}
						</p>
						{showDateRange && (
							<div ref={datePickerRef}>
								<DateRange
									editableDateInputs={true}
									onChange={(item) => setDateRange([item.selection])}
									moveRangeOnFirstSelection={false}
									ranges={dateRange}
									rangeColors={["#EE685F"]}
									className="date-range"
									disabledDates={[]} //dates to be fetched from api and updated when someone makes a reservation
								/>
							</div>
						)}
					</div>
				)}
			</div>
			<button className="search-button" onClick={() => searchClicked()}>
				<FiSearch />
			</button>
		</div>
	);
};

export default SearchBar;
