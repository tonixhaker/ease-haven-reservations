
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";

// Mock data for demonstration
const mockApartments = [
  {
    id: 1,
    name: "Luxury Apartment",
    description: "A beautiful luxury apartment with sea view",
    price: 150,
    owner: "John Owner",
  },
  {
    id: 2,
    name: "City Center Flat",
    description: "Cozy flat located in the heart of the city",
    price: 120,
    owner: "Jane Owner",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    description: "Peaceful apartment with mountain views",
    price: 180,
    owner: "Michael Owner",
  },
];

const mockBookings = [
  {
    id: 1,
    apartmentId: 1,
    clientName: "John Doe",
    clientEmail: "john@example.com",
    startDate: new Date(2023, 5, 10),
    endDate: new Date(2023, 5, 15),
    totalPrice: 750,
    status: "Confirmed",
  },
  {
    id: 2,
    apartmentId: 1,
    clientName: "Sarah Wilson",
    clientEmail: "sarah@example.com",
    startDate: new Date(2023, 6, 5),
    endDate: new Date(2023, 6, 12),
    totalPrice: 1050,
    status: "Pending",
  },
  {
    id: 3,
    apartmentId: 2,
    clientName: "Michael Brown",
    clientEmail: "michael@example.com",
    startDate: new Date(2023, 5, 20),
    endDate: new Date(2023, 5, 25),
    totalPrice: 600,
    status: "Confirmed",
  },
  {
    id: 4,
    apartmentId: 1,
    clientName: "Emma Johnson",
    clientEmail: "emma@example.com",
    startDate: new Date(2023, 7, 1),
    endDate: new Date(2023, 7, 10),
    totalPrice: 1500,
    status: "Cancelled",
  },
];

const ApartmentBookingsPage = () => {
  const { id } = useParams<{ id: string }>();
  const apartmentId = parseInt(id || "0");
  
  const [statusFilter, setStatusFilter] = useState("All");

  // Find the current apartment
  const apartment = mockApartments.find((apt) => apt.id === apartmentId);
  
  // Filter bookings for this apartment
  const apartmentBookings = mockBookings.filter(
    (booking) => booking.apartmentId === apartmentId
  );

  // Apply status filter if needed
  const filteredBookings = statusFilter === "All" 
    ? apartmentBookings 
    : apartmentBookings.filter(booking => booking.status === statusFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (!apartment) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl font-bold mb-4">Apartment Not Found</h1>
          <Button asChild>
            <Link to="/admin/apartments">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Apartments
            </Link>
          </Button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/admin/apartments">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Apartments
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">
          Bookings for {apartment.name}
        </h1>
      </div>

      <div className="bg-white rounded-md border p-4 mb-6">
        <h2 className="text-xl font-semibold mb-2">Apartment Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{apartment.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Price per day</p>
            <p className="font-medium">${apartment.price}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Owner</p>
            <p className="font-medium">{apartment.owner}</p>
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Booking History</h2>
        <div className="flex gap-2">
          <Button 
            variant={statusFilter === "All" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setStatusFilter("All")}
          >
            All
          </Button>
          <Button 
            variant={statusFilter === "Confirmed" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setStatusFilter("Confirmed")}
          >
            Confirmed
          </Button>
          <Button 
            variant={statusFilter === "Pending" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setStatusFilter("Pending")}
          >
            Pending
          </Button>
          <Button 
            variant={statusFilter === "Cancelled" ? "default" : "outline"} 
            size="sm" 
            onClick={() => setStatusFilter("Cancelled")}
          >
            Cancelled
          </Button>
        </div>
      </div>

      {filteredBookings.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-md border">
          <p className="text-gray-500">No bookings found with the selected filter.</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
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
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{booking.clientName}</div>
                      <div className="text-sm text-gray-500">{booking.clientEmail}</div>
                    </div>
                  </TableCell>
                  <TableCell>{format(booking.startDate, "MMM dd, yyyy")}</TableCell>
                  <TableCell>{format(booking.endDate, "MMM dd, yyyy")}</TableCell>
                  <TableCell>${booking.totalPrice}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </AdminLayout>
  );
};

export default ApartmentBookingsPage;
