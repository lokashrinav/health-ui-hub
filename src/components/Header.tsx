import {
  Bell,
  Heart,
  LogIn,
  Menu,
  MessageSquare,
  Search,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

// --- Mock Data and Types ---
type Notification = {
  id: number;
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
};

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "New Patient Assigned",
    description: "Dr. Emily Carter has been assigned to a new patient, John Doe.",
    timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
    read: false,
  },
  {
    id: 2,
    title: "Lab Results Ready",
    description: "Lab results for patient Sarah Williams are now available.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    read: false,
  },
  {
    id: 3,
    title: "System Update",
    description: "A system update is scheduled for tonight at 11 PM EST.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    read: true,
  },
  {
    id: 4,
    title: "Medication Reminder",
    description: "Patient Michael Brown is due for his medication.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    read: true,
  },
];
// -------------------------

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true to show notifications
  const [notifications, setNotifications] =
    useState<Notification[]>(mockNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const navigationItems = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MediCore AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search features..."
                className="pl-10 w-64 border-gray-200 focus:border-blue-500"
              />
            </div>

            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs bg-red-600 hover:bg-red-700 text-white">
                      {unreadCount}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 md:w-96">
                <DropdownMenuLabel className="flex justify-between items-center">
                  <span className="font-semibold">Notifications</span>
                  {unreadCount > 0 && (
                    <Button
                      variant="link"
                      size="sm"
                      className="h-auto p-0"
                      onClick={handleMarkAllAsRead}
                    >
                      Mark all as read
                    </Button>
                  )}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <DropdownMenuItem
                      key={notification.id}
                      className={`flex items-start gap-3 p-3 transition-colors hover:bg-gray-50 ${
                        !notification.read ? "bg-blue-50/50" : ""
                      }`}
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                      {!notification.read && (
                        <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                      )}
                      <div className={`flex-grow ${notification.read ? 'ml-4' : ''}`}>
                        <p className="font-semibold text-sm">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-600">
                          {notification.description}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {formatDistanceToNow(notification.timestamp, {
                            addSuffix: true,
                          })}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <MessageSquare className="mx-auto h-8 w-8 mb-2" />
                    <p className="font-semibold">No new notifications</p>
                    <p className="text-sm">You're all caught up!</p>
                  </div>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center py-2">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <User className="h-5 w-5" />
                    <span>Dr. Smith</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                  <DropdownMenuItem>Patient Records</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100 animate-fade-in">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search features..."
                className="pl-10 border-gray-200 focus:border-blue-500"
              />
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-3 mb-4">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-blue-100">
              {isLoggedIn ? (
                <>
                  <Button variant="ghost" className="justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Dr. Smith
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                    <Badge className="ml-2 h-5 w-5 rounded-full p-0 text-xs bg-red-600 hover:bg-red-700 text-white">
                      {unreadCount}
                    </Badge>
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="justify-start">
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Get Started
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
