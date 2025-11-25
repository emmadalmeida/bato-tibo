package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import androidx.core.view.WindowCompat;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceStare) {
    super.onCreate(savedInstanceStare);
    WindowCompat.setDecorFitsSystemWindows(getWindow(), true);
  }
}
