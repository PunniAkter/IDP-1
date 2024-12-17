import AttendanceReminders from "@/components/AttendanceReminders";
import Dashboard from "@/components/Dashboard";
import GeoFencingComponent from "@/components/GeoFencingComponent";
import History from "@/components/History";
import Notifications from "@/components/Notifications";
import TrackAttendance from "@/components/TrackAttendance";
import Link from "next/link";


export default function Students() {
  return (
    <html>
      <body>
        <div>

          <TrackAttendance />
          <History />
          {/* <Notifications /> */}
          <AttendanceReminders />
          <Dashboard />
          {/* <AdminGeoFenceComponent /> */}
          <GeoFencingComponent />
        </div>
      </body>
    </html>
  );
}

