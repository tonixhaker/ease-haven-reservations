
import { useState } from "react";
import { Link } from "react-router-dom";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2, Plus, Calendar } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

// Mock data for demonstration
const mockApartments = [
  {
    id: 1,
    name: "Luxury Apartment",
    description: "A beautiful luxury apartment with sea view",
    price: 150,
    owner: "John Owner",
    ownerID: 1,
  },
  {
    id: 2,
    name: "City Center Flat",
    description: "Cozy flat located in the heart of the city",
    price: 120,
    owner: "Jane Owner",
    ownerID: 2,
  },
  {
    id: 3,
    name: "Mountain Retreat",
    description: "Peaceful apartment with mountain views",
    price: 180,
    owner: "Michael Owner",
    ownerID: 3,
  },
  {
    id: 4,
    name: "Beach House",
    description: "Direct access to the beach",
    price: 250,
    owner: "Sarah Owner",
    ownerID: 4,
  },
];

const mockOwners = [
  { id: 1, name: "John Owner" },
  { id: 2, name: "Jane Owner" },
  { id: 3, name: "Michael Owner" },
  { id: 4, name: "Sarah Owner" },
  { id: 5, name: "David Owner" },
];

const ApartmentsPage = () => {
  const [apartments, setApartments] = useState(mockApartments);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentApartment, setCurrentApartment] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    ownerID: "",
  });

  const handleCreateApartment = () => {
    setCurrentApartment(null);
    setFormData({
      name: "",
      description: "",
      price: "",
      ownerID: "",
    });
    setIsDialogOpen(true);
  };

  const handleEditApartment = (apartment: any) => {
    setCurrentApartment(apartment);
    setFormData({
      name: apartment.name,
      description: apartment.description,
      price: apartment.price.toString(),
      ownerID: apartment.ownerID.toString(),
    });
    setIsDialogOpen(true);
  };

  const handleDeleteApartment = (apartment: any) => {
    setCurrentApartment(apartment);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (currentApartment) {
      setApartments(apartments.filter((a) => a.id !== currentApartment.id));
      toast.success("Apartment deleted successfully");
      setIsDeleteDialogOpen(false);
    }
  };

  const handleSubmit = () => {
    const ownerObj = mockOwners.find(
      (o) => o.id === parseInt(formData.ownerID)
    );
    
    if (currentApartment) {
      // Edit existing apartment
      setApartments(
        apartments.map((a) =>
          a.id === currentApartment.id
            ? {
                ...a,
                name: formData.name,
                description: formData.description,
                price: parseFloat(formData.price),
                ownerID: parseInt(formData.ownerID),
                owner: ownerObj ? ownerObj.name : "Unknown",
              }
            : a
        )
      );
      toast.success("Apartment updated successfully");
    } else {
      // Create new apartment
      const newApartment = {
        id: apartments.length + 1,
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        ownerID: parseInt(formData.ownerID),
        owner: ownerObj ? ownerObj.name : "Unknown",
      };
      setApartments([...apartments, newApartment]);
      toast.success("Apartment created successfully");
    }
    setIsDialogOpen(false);
  };

  return (
    <AdminLayout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Apartments Management</h1>
        <Button onClick={handleCreateApartment}>
          <Plus className="mr-2 h-4 w-4" /> Add Apartment
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price/day</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Bookings</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apartments.map((apartment) => (
              <TableRow key={apartment.id}>
                <TableCell>{apartment.id}</TableCell>
                <TableCell>{apartment.name}</TableCell>
                <TableCell>${apartment.price}</TableCell>
                <TableCell>{apartment.owner}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/admin/apartments/${apartment.id}/bookings`}>
                      <Calendar className="mr-2 h-4 w-4" />
                      View Bookings
                    </Link>
                  </Button>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditApartment(apartment)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteApartment(apartment)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {currentApartment ? "Edit Apartment" : "Create New Apartment"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price/day
              </Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="owner" className="text-right">
                Owner
              </Label>
              <Select
                value={formData.ownerID}
                onValueChange={(value) =>
                  setFormData({ ...formData, ownerID: value })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select an owner" />
                </SelectTrigger>
                <SelectContent>
                  {mockOwners.map((owner) => (
                    <SelectItem key={owner.id} value={owner.id.toString()}>
                      {owner.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to delete "{currentApartment?.name}"? This action
            cannot be undone.
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default ApartmentsPage;
