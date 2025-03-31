
import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Plus, Edit, Trash, Calendar, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockApartments } from "@/data/mockData";

const OwnerApartmentsPage = () => {
  // For demo purposes, we're assuming the owner's ID is owner-1
  const ownerId = "owner-1";
  const [apartments, setApartments] = useState(
    mockApartments.filter((apt) => apt.ownerId === ownerId)
  );

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this apartment?")) {
      setApartments(apartments.filter((apt) => apt.id !== id));
    }
  };

  return (
    <OwnerLayout>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Apartments</h1>
        <Button className="flex items-center gap-1">
          <Plus size={16} />
          <span>Add Apartment</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Manage Your Properties</CardTitle>
        </CardHeader>
        <CardContent>
          {apartments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Building size={48} className="mb-4 text-gray-400" />
              <h3 className="mb-2 text-xl font-medium">No apartments yet</h3>
              <p className="mb-6 text-muted-foreground">
                You haven't added any apartments yet. Start by adding your first property.
              </p>
              <Button className="flex items-center gap-1">
                <Plus size={16} />
                <span>Add Apartment</span>
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Price / Day</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apartments.map((apartment) => (
                  <TableRow key={apartment.id}>
                    <TableCell className="font-medium">{apartment.title}</TableCell>
                    <TableCell>{apartment.location}</TableCell>
                    <TableCell>${apartment.pricePerDay}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          <Edit size={16} />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(apartment.id)}
                        >
                          <Trash size={16} />
                        </Button>
                        <Link to={`/owner/apartments/${apartment.id}/bookings`}>
                          <Button variant="outline" size="sm">
                            <Calendar size={16} />
                          </Button>
                        </Link>
                      </div>
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

export default OwnerApartmentsPage;
