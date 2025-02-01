let connected = false;
export const isConnected = () => {
    return connected;
};

export const setConnected = (value: boolean) => {
    connected = value;
};

export async function getUniversityName(id: number) {
    try {
        const response = await $fetch(getAPI() + '/uni_prof/uni_info_by_id/' + id, {
            method: "GET",
            credentials: "include",
        });

        if (response.status === "success" && response.university) {
            return response.university.uni_name;
        } else {
            console.error("Error:", response);
            return "Unknown";
        }
    } catch (err) {
        console.error( err);
        return "Unknown";
    }
}

export async function getProfessorName(id: number) {
    try {
        const response = await $fetch(getAPI() + '/uni_prof/prof_info_by_id/' + id, {
            method: "GET",
            credentials: "include",
        });

        if (response.status === "success" && response.professor) {
            return response.professor.prof_name;
        } else {
            console.error("Error:", response);
            return "Unknown";
        }
    } catch (err) {
        console.error( err);
        return "Unknown";
    }
}