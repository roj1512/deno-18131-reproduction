#include <unistd.h>

int sum(int x, int y) { return x + y; }

int sleep_forever() {
  while (1) {
    sleep(10);
  }
}
