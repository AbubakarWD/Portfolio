(() => {
    const SUPABASE_URL = "https://aamleqhcbgjdmkvmwvbt.supabase.co";
    const SUPABASE_KEY = "sb_publishable_9s6ba4oxA7KQTLLM2R5dtA_iIDSXAcV";
    window.db = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    console.log("Supabase client initialized");
    console.log(window.db);
})();