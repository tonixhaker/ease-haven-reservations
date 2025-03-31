
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import OwnerLayout from "@/components/layout/OwnerLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockApartments, mockBookings } from "@/data/mockData";

const OwnerApartmentBookingsPage = () => {
  const { id } = useParams<{ id: string }>();
  const apartmentId = Number(id);
  
  const apartment = mockApartments.find((apt) => apt.id === apartmentId);
  const [bookings, setBookings] = useState(
    mockBookings.filter((booking) => booking.apartmentId === apartmentId)
  );

  // Filter states
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter bookings based on status
  const filteredBookings = statusFilter === "all" 
    ? bookings 
    : bookings.filter(booking => booking.status === statusFilter);

  if (!apartment) {
    return (
      <OwnerLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Apartment not found</h2>
          <Link to="/owner/apartments">
            <Button>
              <ArrowLeft className="mr-2" size={16} />
              Back to My Apartments
            </Button>
          </Link>
        </div>
      </OwnerLayout>
    );
  }

  return (
    <OwnerLayout>
      <div className="mb-6">
        <Link to="/owner/apartments" className="text-sm text-blue-600 hover:underline inline-flex items-center mb-4">
          <ArrowLeft size={16} className="mr-1" />
          Back to My Apartments
        </Link>
        <h1 className="text-2xl font-bold">{apartment.title} - Bookings</h1>
        <p className="text-muted-foreground">{apartment.location}</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Booking Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-blue-700">Total Bookings</p>
              <p className="text-2xl font-bold">{bookings.length}</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-sm text-green-700">Completed</p>
              <p className="text-2xl font-bold">
                {bookings.filter(b => b.status === "completed").length}
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <p className="text-sm text-yellow-700">Upcoming</p>
              <p className="text-2xl font-bold">
                {bookings.filter(b => b.status === "confirmed").length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <CardTitle>Bookings</CardTitle>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button 
              variant={statusFilter === "all" ? "default" : "outline"} 
              size="sm"
              onClick={() => setStatusFilter("all")}
            >
              All
            </Button>
            <Button 
              variant={statusFilter === "confirmed" ? "default" : "outline"} 
              size="sm"
              onClick={() => setStatusFilter("confirmed")}
            >
              Upcoming
            </Button>
            <Button 
              variant={statusFilter === "completed" ? "default" : "outline"} 
              size="sm"
              onClick={() => setStatusFilter("completed")}
            >
              Completed
            </Button>
            <Button 
              variant={statusFilter === "cancelled" ? "default" : "outline"} 
              size="sm"
              onClick={() => setStatusFilter("cancelled")}
            >
              Cancelled
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {filteredBookings.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No bookings found</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Client</TableHead>
                  <TableHead>Check-in</TableHead>
                  <TableHead>Check-out</TableHead>
                  <TableHead>Total Price</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.clientName}</TableCell>
                    <TableCell>{booking.checkIn}</TableCell>
                    <TableCell>{booking.checkOut}</TableCell>
                    <TableCell>${booking.totalPrice}</TableCell>
                    <TableCell>
                      <span 
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          booking.status === "confirmed" 
                            ? "bg-blue-100 text-blue-800" 
                            : booking.status === "completed" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </OwnerLayout>
  );
};

export default OwnerApartmentBookingsPage;
