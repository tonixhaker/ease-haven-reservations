
import { useState } from "react";
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
import { Pencil, Trash2, Plus } from "lucide-react";
import { toast } from "sonner";

// Mock data for demonstration
const mockClients = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Client" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Client" },
  { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "Client" },
  { id: 5, name: "David Clark", email: "david@example.com", role: "Admin" },
];

const ClientsPage = () => {
  const [clients, setClients] = useState(mockClients);
  const [filteredRole, setFilteredRole] = useState("All");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Client",
  });

  const filteredClients = filteredRole === "All" 
    ? clients 
    : clients.filter(client => client.role === filteredRole);

  const handleCreateClient = () => {
    setCurrentClient(null);
    setFormData({ name: "", email: "", role: "Client" });
    setIsDialogOpen(true);
  };

  const handleEditClient = (client: any) => {
    setCurrentClient(client);
    setFormData({
      name: client.name,
      email: client.email,
      role: client.role,
    });
    setIsDialogOpen(true);
  };

  const handleDeleteClient = (client: any) => {
    setCurrentClient(client);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (currentClient) {
      setClients(clients.filter(c => c.id !== currentClient.id));
      toast.success("Client deleted successfully");
      setIsDeleteDialogOpen(false);
    }
  };

  const handleSubmit = () => {
    if (currentClient) {
      // Edit existing client
      setClients(
        clients.map(c =>
          c.id === currentClient.id ? { ...c, ...formData } : c
        )
      );
      toast.success("Client updated successfully");
    } else {
      // Create new client
      const newClient = {
        id: clients.length + 1,
        ...formData,
      };
      setClients([...clients, newClient]);
      toast.success("Client created successfully");
    }
    setIsDialogOpen(false);
  };

  return (
    <AdminLayout>
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clients Management</h1>
        <div className="flex gap-4">
          <Select value={filteredRole} onValueChange={setFilteredRole}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Roles</SelectItem>
              <SelectItem value="Client">Client</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleCreateClient}>
            <Plus className="mr-2 h-4 w-4" /> Add Client
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredClients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.role}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditClient(client)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteClient(client)}
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
              {currentClient ? "Edit Client" : "Create New Client"}
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
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select
                value={formData.role}
                onValueChange={(value) =>
                  setFormData({ ...formData, role: value })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Client">Client</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
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
            Are you sure you want to delete {currentClient?.name}? This action
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

export default ClientsPage;
