import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Esimerkkiluokkien tiedot
const yogaClasses = [
	{
		id: 1,
		title: "Morning Flow",
		time: "7:00 AM - 8:15 AM",
		instructor: "Camille Cussaguet",
		level: "All Levels",
		spots: 8,
		maxSpots: 12,
		description:
			"Start your day with an energizing flow that will awaken your body and mind.",
	},
	{
		id: 2,
		title: "Gentle Hatha",
		time: "10:30 AM - 11:45 AM",
		instructor: "Camille Cussaguet",
		level: "Beginner",
		spots: 5,
		maxSpots: 12,
		description:
			"A slower-paced class focusing on fundamental poses and proper alignment.",
	},
	{
		id: 3,
		title: "Power Vinyasa",
		time: "5:30 PM - 6:45 PM",
		instructor: "Camille Cussaguet",
		level: "Intermediate/Advanced",
		spots: 10,
		maxSpots: 12,
		description:
			"A dynamic, flowing practice that builds strength, flexibility and focus.",
	},
	{
		id: 4,
		title: "Restorative Yoga",
		time: "7:30 PM - 8:45 PM",
		instructor: "Camille Cussaguet",
		level: "All Levels",
		spots: 3,
		maxSpots: 10,
		description:
			"Unwind with gentle, supported poses designed to promote deep relaxation.",
	},
];

const Booking = () => {
	const { toast } = useToast();
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [bookedClasses, setBookedClasses] = useState<number[]>([]);

	// Käsittelee varauslogiikka
	const handleBookClass = (classId: number) => {
		if (bookedClasses.includes(classId)) {
			setBookedClasses(bookedClasses.filter((id) => id !== classId));
			toast({
				title: "Booking Cancelled",
				description: "You have cancelled your reservation for this class.",
			});
		} else {
			setBookedClasses([...bookedClasses, classId]);
			toast({
				title: "Class Booked",
				description: "You have successfully booked this class!",
			});
		}
	};

	return (
		<div className="py-12 bg-yoga-50 min-h-screen">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-10">
						<h1 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-emerald-400">
							Book a Class
						</h1>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Select a date and class to reserve your spot. Classes are limited to
							ensure personalized attention for all students.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Select Date</CardTitle>
								<CardDescription>
									Choose a date to view available classes
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									className="rounded-md border pointer-events-auto"
								/>
							</CardContent>
							<CardFooter className="text-sm text-muted-foreground">
								{date ? (
									<p>
										Showing classes for{" "}
										{format(date, "EEEE, MMMM d, yyyy")}
									</p>
								) : (
									<p>Please select a date</p>
								)}
							</CardFooter>
						</Card>

						<div className="md:col-span-2">
							<h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">
								Available Classes
							</h2>

							{date ? (
								<div className="space-y-4">
									{yogaClasses.map((yogaClass) => (
										<Card key={yogaClass.id} className="overflow-hidden">
											<div className="grid grid-cols-1 md:grid-cols-3">
												<div className="bg-yoga-100 p-6 flex flex-col justify-center">
													<h3 className="font-serif font-medium text-xl mb-1">
														{yogaClass.title}
													</h3>
													<p className="text-yoga-700 mb-1">
														{yogaClass.time}
													</p>
													<p className="text-sm text-muted-foreground mb-2">
														with {yogaClass.instructor}
													</p>
													<div className="flex items-center text-xs">
														<span className="px-2 py-1 rounded-full bg-yoga-200 text-yoga-700">
															{yogaClass.level}
														</span>
													</div>
												</div>

												<div className="p-6 md:col-span-2 flex flex-col h-full">
													<div className="flex-1">
														<p className="text-muted-foreground mb-3">
															{yogaClass.description}
														</p>
														<div className="flex items-center gap-2 mb-4">
															<div className="w-full bg-gray-200 rounded-full h-2">
																<div
																	className="bg-yoga-500 h-2 rounded-full"
																	style={{
																		width: `${
																			(yogaClass.spots / yogaClass.maxSpots) * 100
																		}%`,
																	}}
																></div>
															</div>
															<span className="text-sm text-muted-foreground whitespace-nowrap">
																{yogaClass.spots} /{" "}
																{yogaClass.maxSpots} spots
															</span>
														</div>
													</div>

													<div className="flex justify-end">
														<Button
															onClick={() => handleBookClass(yogaClass.id)}
															variant={
																bookedClasses.includes(yogaClass.id)
																	? "outline"
																	: "default"
															}
															className={
																bookedClasses.includes(yogaClass.id)
																	? "border-yoga-300 text-yoga-500 hover:bg-yoga-100"
																	: "bg-yoga-500 hover:bg-yoga-600"
															}
															disabled={
																yogaClass.spots === 0 &&
																!bookedClasses.includes(yogaClass.id)
															}
														>
															{yogaClass.spots === 0 &&
															!bookedClasses.includes(yogaClass.id)
																? "Class Full"
																: bookedClasses.includes(yogaClass.id)
																? "Cancel Booking"
																: "Book Class"}
														</Button>
													</div>
												</div>
											</div>
										</Card>
									))}
								</div>
							) : (
								<Card>
									<CardContent className="pt-6 text-center text-muted-foreground">
										Please select a date to view available classes.
									</CardContent>
								</Card>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
