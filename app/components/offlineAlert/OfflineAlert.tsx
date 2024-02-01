import useNetworkStatus from "@/app/hooks/useNetworkStatus";

function OfflineAlert() {
  const { isOnline } = useNetworkStatus();

  return (
    <>
      {!isOnline && (
        <div className="bg-red-600 text-white text-center py-2">
          ❌ NO INTERNET CONNECTION
        </div>
      )}
    </>
  );
}

export default OfflineAlert;
