#ifndef ADDONS_H
#define ADDONS_H

#define MAX_ADDONS 100
#define MAX_NAME_LENGTH 50

typedef struct {
    char name[MAX_NAME_LENGTH];
    int isActive;
} Addon;

Addon addons[MAX_ADDONS];
int addonCount = 0;

void addAddon(const char *name) {
    if (addonCount >= MAX_ADDONS) {
        printf("Cannot add more addons.\n");
        return;
    }
    strncpy(addons[addonCount].name, name, MAX_NAME_LENGTH - 1);
    addons[addonCount].name[MAX_NAME_LENGTH - 1] = '\0';
    addons[addonCount].isActive = 0;
    addonCount++;
}

void activateAddon(const char *name) {
    for (int i = 0; i < addonCount; i++) {
        if (strcmp(addons[i].name, name) == 0) {
            addons[i].isActive = 1;
            printf("Addon %s activated.\n", name);
            return;
        }
    }
    printf("Addon %s not found.\n", name);
}

void deactivateAddon(const char *name) {
    for (int i = 0; i < addonCount; i++) {
        if (strcmp(addons[i].name, name) == 0) {
            addons[i].isActive = 0;
            printf("Addon %s deactivated.\n", name);
            return;
        }
    }
    printf("Addon %s not found.\n", name);
}

void listAddons() {
    printf("List of addons:\n");
    for (int i = 0; i < addonCount; i++) {
        printf("%s - %s\n", addons[i].name, addons[i].isActive ? "Active" : "Inactive");
    }
}

int main() {
    addAddon("Addon1");
    addAddon("Addon2");
    addAddon("Addon3");

    listAddons();

    activateAddon("Addon1");
    deactivateAddon("Addon2");

    listAddons();

    return 0;
}

#endif // ADDONS_H
