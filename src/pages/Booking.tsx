// Booking.tsx
// -------------------
// Yoga class booking page (currently disabled in navigation).
// - All visible text and class data is bilingual and switches with press of a button.
// - To re-enable, uncomment the export and navigation links in index.ts, Header.tsx, and Footer.tsx.
// For navigation, see Header.tsx.

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
	en: {
		pageTitle: "Book a Class",
		pageSubtitle:
			"Select a date and class to reserve your spot. Classes are limited to ensure personalized attention for all students.",
		selectDate: "Please select a date to view available classes.",
		availableClasses: "Available Classes",
		classFull: "Class Full",
		cancelBooking: "Cancel Booking",
		bookClass: "Book Class",
		memberLogin: "Member Login",
		requestAccess: "Request Access",
		with: "with",
		spots: "spots",
		level: "Level",
		time: "Time",
		instructor: "Instructor",
		booked: "Booked",
		notBooked: "Not Booked",
		bookingCancelledTitle: "Booking Cancelled",
		bookingCancelledDesc: "You have cancelled your reservation for this class.",
		bookingSuccessTitle: "Class Booked",
		bookingSuccessDesc: "You have successfully booked this class!",
		calendarTitle: "Select Date",
		calendarDesc: "Choose a date to view available classes",
		classes: [
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
		],
	},
	fr: {
		pageTitle: "Réserver un cours",
		pageSubtitle:
			"Sélectionnez une date et un cours pour réserver votre place. Les cours sont limités pour garantir une attention personnalisée à chaque élève.",
		selectDate: "Veuillez sélectionner une date pour voir les cours disponibles.",
		availableClasses: "Cours disponibles",
		classFull: "Cours complet",
		cancelBooking: "Annuler la réservation",
		bookClass: "Réserver le cours",
		memberLogin: "Connexion membre",
		requestAccess: "Demander l'accès",
		with: "avec",
		spots: "places",
		level: "Niveau",
		time: "Heure",
		instructor: "Instructeur",
		booked: "Réservé",
		notBooked: "Non réservé",
		bookingCancelledTitle: "Réservation annulée",
		bookingCancelledDesc: "Vous avez annulé votre réservation pour ce cours.",
		bookingSuccessTitle: "Cours réservé",
		bookingSuccessDesc: "Vous avez réservé ce cours avec succès !",
		calendarTitle: "Sélectionner une date",
		calendarDesc: "Choisissez une date pour voir les cours disponibles",
		classes: [
			{
				id: 1,
				title: "Flow du matin",
				time: "7h00 - 8h15",
				instructor: "Camille Cussaguet",
				level: "Tous niveaux",
				spots: 8,
				maxSpots: 12,
				description:
					"Commencez la journée avec un flow énergisant pour réveiller le corps et l'esprit.",
			},
			{
				id: 2,
				title: "Hatha Doux",
				time: "10h30 - 11h45",
				instructor: "Camille Cussaguet",
				level: "Débutant",
				spots: 5,
				maxSpots: 12,
				description:
					"Un cours au rythme lent axé sur les postures fondamentales et l'alignement.",
			},
			{
				id: 3,
				title: "Vinyasa Puissant",
				time: "17h30 - 18h45",
				instructor: "Camille Cussaguet",
				level: "Intermédiaire/Avancé",
				spots: 10,
				maxSpots: 12,
				description:
					"Une pratique dynamique et fluide pour renforcer force, souplesse et concentration.",
			},
			{
				id: 4,
				title: "Yoga Restauratif",
				time: "19h30 - 20h45",
				instructor: "Camille Cussaguet",
				level: "Tous niveaux",
				spots: 3,
				maxSpots: 10,
				description:
					"Détendez-vous avec des postures douces et soutenues pour une relaxation profonde.",
			},
		],
	},
};

const Booking = () => {
	const { toast } = useToast();
	const { language } = useLanguage();
	const t = translations[language] || translations.en;
	const yogaClasses = t.classes;

	const [date, setDate] = useState<Date | undefined>(new Date());
	const [bookedClasses, setBookedClasses] = useState<number[]>([]);

	const handleBookClass = (classId: number) => {
		if (bookedClasses.includes(classId)) {
			setBookedClasses(bookedClasses.filter((id) => id !== classId));
			toast({
				title: t.bookingCancelledTitle,
				description: t.bookingCancelledDesc,
			});
		} else {
			setBookedClasses([...bookedClasses, classId]);
			toast({
				title: t.bookingSuccessTitle,
				description: t.bookingSuccessDesc,
			});
		}
	};

	return (
		<div className="py-12 bg-yoga-50 min-h-screen">
			<div className="container">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-10">
						<h1 className="text-3xl md:text-5xl font-serif font-medium mb-4 text-emerald-400">
							{t.pageTitle}
						</h1>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							{t.pageSubtitle}
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<CardTitle>{t.calendarTitle}</CardTitle>
								<CardDescription>{t.calendarDesc}</CardDescription>
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
										{format(
											date,
											language === "fr"
												? "EEEE d MMMM yyyy"
												: "EEEE, MMMM d, yyyy"
										)}
									</p>
								) : (
									<p>{t.selectDate}</p>
								)}
							</CardFooter>
						</Card>

						<div className="md:col-span-2">
							<h2 className="text-2xl font-serif font-medium mb-4 text-emerald-400">
								{t.availableClasses}
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
														{t.with} {yogaClass.instructor}
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
																{yogaClass.maxSpots} {t.spots}
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
																? t.classFull
																: bookedClasses.includes(yogaClass.id)
																? t.cancelBooking
																: t.bookClass}
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
										{t.selectDate}
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
