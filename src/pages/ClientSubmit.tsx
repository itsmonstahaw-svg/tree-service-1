import { useEffect } from "react";

const ClientSubmit = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow pt-16 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Client Follow-Up
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill this in after every appointment.
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 md:p-8 shadow-sm border border-border">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YZO3cnWQYmkEnYl4cNCG"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
              id="inline-YZO3cnWQYmkEnYl4cNCG"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Client Follow-Up Form"
              data-height="804"
              data-layout-iframe-id="inline-YZO3cnWQYmkEnYl4cNCG"
              data-form-id="YZO3cnWQYmkEnYl4cNCG"
              title="Client Follow-Up Form"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientSubmit;
